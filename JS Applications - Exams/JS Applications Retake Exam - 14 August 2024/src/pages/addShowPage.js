import {html} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const addShowTempate = () => 
    html `
        <section id="create">
            <div class="form">
                <h2>Add Show</h2>
                <form class="create-form">
                <input
                type="text"
                name="title"
                id="title"
                placeholder="TV Show title"
                />
                <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                />
                <input
                type="text"
                name="genre"
                id="genre"
                placeholder="Genre"
            />
            <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            />
                <textarea
                id="details"
                name="details"
                placeholder="Details"
                rows="2"
                cols="10"
                ></textarea>
                <button type="submit">Add Show</button>
                </form>
            </div>
        </section>
    `
export function addShowPage(ctx) {
    const user = JSON.parse(localStorage.getItem('user'));
    ctx.render(addShowTempate());
    const formElement = document.querySelector('.create-form');
    formElement.addEventListener('submit', onSubmit)

    async function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(document.querySelector('.create-form'));
        const title = form.get('title');
        const imageUrl = form.get('image-url');
        const genre = form.get('genre');
        const country = form.get('country');
        const details = form.get('details');

        if ([title, imageUrl, genre, country, details].some(x => x == '')) {
            window.alert('Input fields must be filled');
            return;
        }

        await fetch('http://localhost:3030/data/shows', {
            method: 'POST',
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
        })

        page.redirect('/tvshows');
    }
}