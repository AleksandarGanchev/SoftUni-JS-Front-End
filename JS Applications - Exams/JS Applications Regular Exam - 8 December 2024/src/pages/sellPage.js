import { html } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../helper.js";




const sellTempate = () =>  
    html `
        <section id="create">
            <div class="form form-item">
            <h2>Add Drone Offer</h2>
            <form class="create-form">
                <input type="text" name="model" id="model" placeholder="Drone Model" />
                <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
                <input type="number" name="price" id="price" placeholder="Price" />
                <input type="number" name="weight" id="weight" placeholder="Weight" />
                <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
                <input type="text" name="condition" id="condition" placeholder="Condition" />
                <textarea name="description" id="description" placeholder="Description"></textarea>
                <button type="submit">Add</button>
            </form>
            </div>
        </section>`

async function onSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    const formData = new FormData(document.querySelector('.create-form'));
    const  model = formData.get('model');
    const  imageUrl = formData.get('imageUrl');
    const  price = formData.get('price');
    const  condition = formData.get('condition');
    const  weight = formData.get('weight');
    const  phone = formData.get('phone');
    const  description = formData.get('description');
    

    if ([model, imageUrl, price, condition, weight, phone, description].some(x => x =='')) {
        displayError()
        return
    }

    await fetch('http://localhost:3030/data/drones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken,
        },
        body: JSON.stringify({
            model,
            imageUrl,
            price,
            condition,
            weight,
            phone,
            description,
        })
    });
    
    page.redirect('/marketplace')
}


export  function sellPage (ctx, ) {    
    ctx.render(sellTempate())
    const form = document.querySelector('.create-form');
    form.addEventListener('submit', onSubmit)

}