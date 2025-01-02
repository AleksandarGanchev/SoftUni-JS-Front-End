import { html } from "../../node_modules/lit-html/lit-html.js"


const detailsTempate = (droneDetails) => 
    html `
     <section id="details">
        <div id="details-wrapper">
          <div>
            <img id="details-img" src="${droneDetails.imageUrl}" alt="example1" />
            <p id="details-model">${droneDetails.model}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="details-price">Price: $${droneDetails.price}</p>
              <p class="details-condition">Condition: ${droneDetails.condition}</p>
              <p class="details-weight">Weight: ${droneDetails.weight}</p>
              <p class="drone-description"> ${droneDetails.description}</p>
              <p class="phone-number">Phone: ${droneDetails.phone}</p>
            </div>
            ${droneDetails._ownerId == JSON.parse(localStorage.getItem('user'))?._id
                ? html `
                    <div class="buttons">
                        <a href="/edit/${droneDetails._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${droneDetails._id}" id="delete-btn">Delete</a>
                    </div>
                `
                : html ``
            }
          </div>
        </div>
      </section>
    `

export async function detailsPage(ctx) {
    const droneId = ctx.params.id; 
    const getResponse = await fetch(`http://localhost:3030/data/drones/${droneId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
   
    const droneDetails = await getResponse.json();
    ctx.render(detailsTempate(droneDetails));
    
    
    
}
