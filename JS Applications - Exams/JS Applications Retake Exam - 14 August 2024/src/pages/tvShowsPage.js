import {html} from "../../node_modules/lit-html/lit-html.js";

const showsTemplate = (shows) => 
    shows.length > 0
      ? html`
            <h2>Users Recommendations</h2>
            <section id="shows">
                ${shows.map(show => {
                return html`
                    <div class="show">
                        <img src="${show.imageUrl}" alt="example1" />
                        <div class="show-info">
                            <h3 class="title">${show.title}</h3>
                            <p class="genre">Genre: ${show.genre}</p>
                            <p class="country-of-origin">Country of Origin: ${show.country}</p>
                            <a class="details-btn" href="/details/${show._id}">Details</a>
                        </div>
                    </div>
                `;
                })}
            </section>
        `
      : html`
            <h2>Users Recommendations</h2>
            <h2 id="no-show">No shows Added.</h2>
        `
  
export async function tvShowsPage(ctx) {
    const getRequest = await fetch('http://localhost:3030/data/shows?sortBy=_createdOn%20desc', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!getRequest.ok) {
        alert('Unsuccessful request');
        return
    }

    const shows = await getRequest.json();
    ctx.render(showsTemplate(Object.values(shows)));
}
