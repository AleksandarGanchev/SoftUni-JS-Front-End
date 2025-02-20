import {html} from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (data) => 
   html `
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <div id="details-text">
              <p id="details-title">${data.title}</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    ${data.details}
                  </p>
                </div>
              </div>

              ${data._ownerId == JSON.parse(localStorage.getItem('user'))?._id
              ? html `
                    <div id="action-buttons">
                        <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${data._id}" id="delete-btn">Delete</a>
                    </div>
            </div>
          </div>
          `
          : html ``
            }
        </section>
        `

export async function detailsPage(ctx) {
    const showId = ctx.params.id;

    const getRequest = await fetch(`http://localhost:3030/data/shows/${showId}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await getRequest.json();    
    ctx.render(detailsTemplate(data));   
}
