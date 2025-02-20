import {html} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const editTemplate = (getResponse) => 
    html `
        <section id="edit">
          <div class="form">
            <h2>Edit Show</h2>
            <form class="edit-form">
              <input
                type="text"
                name="title"
                id="title"
                .value="${getResponse.title}"
                placeholder="TV Show title"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                .value="${getResponse.imageUrl}"
                placeholder="Image URL"
              />
              <input
              type="text"
              name="genre"
              id="genre"
              .value="${getResponse.genre}"
              placeholder="Genre"
            />
            <input
            type="text"
            name="country"
            id="country"
            .value="${getResponse.country}"
            placeholder="Country"

          />
              <textarea
                id="details"
                name="details"
                placeholder="Details"
                rows="2"
                cols="10"
              >${getResponse.details}</textarea>
              <button type="submit">Edit Show</button>
            </form>
          </div>
        </section>
`

export async function editPage(ctx) {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = ctx.params.id;
    
    const getRequest = await fetch(`http://localhost:3030/data/shows/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const getResponse = await getRequest.json();
    ctx.render(editTemplate(getResponse));

    const editForm = document.querySelector('.edit-form');
    console.log(editForm);
    
    editForm.addEventListener('submit', onSubmit)

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(document.querySelector('.edit-form'));       
        const title = formData.get('title');
        const imageUrl = formData.get('image-url');
        const genre = formData.get('genre');
        const country = formData.get('country');
        const details = formData.get('details');

        if ([title, imageUrl, genre, country,details].some(x => x == '' )) {
            window.alert('Input fields cannot be empty');
            return;
        };
        
        await fetch(`http://localhost:3030/data/shows/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify({
                title,
                imageUrl,
                genre,
                country,
                details,
              }) 
        });

        page.redirect(`/details/${id}`);
    }
}