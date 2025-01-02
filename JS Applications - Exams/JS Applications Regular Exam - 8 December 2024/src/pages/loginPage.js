import { html } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../helper.js";

const loginTemplate = () => 
    html `
         <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </section>
    `

async function onSubmit(e) {
    
    e.preventDefault()

    const form = new FormData(document.querySelector('.login-form'));
    const email = form.get('email');
    const password = form.get('password');

    if ([email, password].some(x => x == '')) {
        displayError()
        return;
    }

    try {
        const postResponse = await fetch('http://localhost:3030/users/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify( {email , password})
        });

        if (!postResponse.ok) {
            throw new Error('test')
        }
        const user = await postResponse.json();
        localStorage.setItem('user', JSON.stringify(user));
                        
        page.redirect('/');
        
    } catch (error) {
        window.alert('Forbidden request');
        return;
    }
}
 
export function loginPage(ctx) {
    ctx.render(loginTemplate());
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', onSubmit)

}