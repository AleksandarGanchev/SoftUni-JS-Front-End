import {html, render} from "../../node_modules/lit-html/lit-html.js";

const header = document.querySelector('#header');

const navigationTemplate = () => {
    const isLoggedIn = localStorage.getItem('user');
    return Boolean(isLoggedIn)
    ? html `
            <a id="logo" href="/"
            ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
            </a>
            <nav>
            <div>
                <a href="/tvshows">TV Shows</a>
                <a href="/search">Search</a>
            </div>
            <div class="user">
                <a href="/addshow">Add Show</a>
                <a href="/logout">Logout</a>
            </div>
        `
    : html `
            <a id="logo" href="/"
            ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
            </a>
            <nav>
            <div>
                <a href="/tvshows">TV Shows</a>
                <a href="/search">Search</a>
            </div>
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        `

}

export function navigationBar(ctx, next) {    
    render(navigationTemplate(), header);
    next();
}


