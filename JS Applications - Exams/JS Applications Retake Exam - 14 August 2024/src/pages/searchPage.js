import {html, render} from "../../node_modules/lit-html/lit-html.js";

const searchForm = () => 
    html `
        <section id="search">
          <div class="form">
            <h2>Search</h2>
            <form class="search-form">
              <input
                type="text"
                name="search"
                id="search-input"
              />
              <button class="button-list">Search</button>
            </form>
          </div>
        </section>
        <h4>Results:</h4>
    `

const searchTemplate = (shows) =>
    shows.length == 0
    ? html` 
            <div class="search-result">      
            <p class="no-result">There is no TV show with this title</p>
        `
    : 
        shows.map(show => {
        return html `
            <div class="show">
            <img src="${show.imageUrl}" alt="example1" />
            <div class="show">
                <h3 class="title">${show.title}</h3>
                <p class="genre">Genre: ${show.genre}</p>
                <p class="country-of-origin">Country of Origin: ${show.country}>
                <a class="details-btn" href="/details/${show._id}">Details</a>
            </div>
            </div>
            `
    })

async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(document.querySelector('.search-form'));
    const searchText = form.get('search');
    const query = encodeURI(`title LIKE "${searchText}"`);
    const getResponse = await fetch(`http://localhost:3030/data/shows?where=${query}`);
    const shows = await getResponse.json();

    const search = document.querySelector('#search');

    render(searchTemplate(shows), search);
}

export async function searchPage(ctx) {
    ctx.render(searchForm());
    const sentForm = document.querySelector('.search-form');
    sentForm.addEventListener('submit', onSubmit)
}
