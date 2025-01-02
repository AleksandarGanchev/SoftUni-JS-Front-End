import {html, render} from "../node_modules/lit-html/lit-html.js"

const header = document.querySelector('#header');

const navigationTemplate = () => {

    const isUserLogged = localStorage.getItem('user');
    return Boolean(isUserLogged) 
        ? html`
              <a id="logo" href="/"><img id="logo" src="./images/logo2.png" alt="img" /></a>
                <nav>
                    <div>
                        <a href="/marketplace">Marketplace</a>
                    </div>
                    <div class="user">
                        <a href="/sell">Sell</a>
                        <a href="/logout">Logout</a>
                    </div>
                </nav>
            `
        : html`
               <a id="logo" href="/"><img id="logo" src="./images/logo2.png" alt="img" /></a>
                <nav>
                    <div>
                        <a href="/marketplace">Marketplace</a>
                    </div>
                    <div class="guest">
                        <a href="/login" id="loginPage">Login</a>
                        <a href="/register">Register</a>
                    </div>
                </nav>
            `
}

export function navigationVIew(ctx, next) {
    render(navigationTemplate(), header)
    next()
}
