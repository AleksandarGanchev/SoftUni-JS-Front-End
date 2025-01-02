import { html } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../helper.js";

const registerTemplate = () => 
    html `
          <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>
    `    

async function registerUser(e) {
    
    e.preventDefault();
    const form = new FormData(document.querySelector('.register-form'));
    const email = form.get('email');
    const password = form.get('password');
    const rePassword = form.get('re-password');
    
    
    if ([email, password, rePassword].some(x => x == '')) {
        displayError()
        return;
    }

    
    if (password != rePassword) {
        window.alert("Passwords don't match");
        return;
    }
    
    try {
        const postResponse = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            body: JSON.stringify( {email, password})
        })
        
        if (!postResponse.ok) {
            throw new Error('error');
        }
        const user = await postResponse.json();
        localStorage.setItem('user', JSON.stringify(user));
        page.redirect('/');
        
    } catch (error) {
        window.alert('Bad request');   
    }
}

export function registerPage(ctx) {
    ctx.render(registerTemplate());
    const formElement = document.querySelector('.register-form');
    formElement.addEventListener('submit', registerUser)      
}