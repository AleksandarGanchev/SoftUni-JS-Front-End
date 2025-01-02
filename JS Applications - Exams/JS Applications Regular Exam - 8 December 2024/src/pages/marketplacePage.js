import { html } from "../../node_modules/lit-html/lit-html.js"

const marketplaceTemplate = (games) =>     
    html `
        <h3 class="heading">Marketplace</h3>
        <section id="dashboard">
            ${games.length > 0 
                ? games.map(previewTemplate)
                : html `<h3 class="no-drones">No Drones Available</h3>`
            }
        </section>`

const previewTemplate = (game) =>
    html `
        <div class="drone">
            <img src=${game.imageUrl} alt="example1" />
            <h3 class="model">${game.model}</h3>
            <div class="drone-info">
                <p class="price">Price: €${game.price}</p>
                <p class="condition">Condition: ${game.condition}</p>
                <p class="weight">Weight: ${game.weight}</p>
            </div>
            <a class="details-btn" href="/details/${game._id}">Details</a>
        </div>        
    `

export async function marketplacePage(ctx) {
    const getResponse = await fetch('http://localhost:3030/data/drones?sortBy=_createdOn%20desc')
    const getObject = await getResponse.json();
    const getAlldrones = Object.values(getObject);
    
    
    ctx.render(marketplaceTemplate(getAlldrones)); 
}
