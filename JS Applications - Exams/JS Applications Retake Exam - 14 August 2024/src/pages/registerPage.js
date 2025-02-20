import {html} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const registerTemplate = () => 
    html `
        <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>
    `

async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(document.querySelector('.register-form'));
    const email = form.get('email');
    const password = form.get('password');
    const rePassword = form.get('re-password');

    if ([email, password, rePassword].some(x => x == '')) {
        window.alert ('Please fill all fields');
        return;
    }

    if (password != rePassword) {
        window.alert('Passwords doesnt match');
        return;
    }

    const postRequest = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            email,
            password,
            rePassword,
        })
    })

    if (!postRequest.ok) {
        window.alert('Registration was unsuccessful');
        return;
    }

    const user = await postRequest.json();
    localStorage.setItem('user', JSON.stringify(user));
    page.redirect('/');
}

export function registerPage(ctx) {
    ctx.render(registerTemplate());
    
    const formElement = document.querySelector('.register-form');
    formElement.addEventListener('submit', onSubmit)
    
}