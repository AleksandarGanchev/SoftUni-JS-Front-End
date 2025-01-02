import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { displayError } from "../helper.js";

const editTemplate = (droneDetails) => 
    html `
        <section id="edit">
            <div class="form form-item">
            <h2>Edit Offer</h2>
            <form class="edit-form">
                <input type="text" name="model" id="model" .value=${droneDetails.model} placeholder="Drone Model" />
                <input type="text" name="imageUrl" id="imageUrl" .value=${droneDetails.imageUrl} placeholder="Image URL" />
                <input type="number" name="price" id="price" .value=${droneDetails.price} placeholder="Price" />
                <input type="number" name="weight" id="weight" .value =${droneDetails.weight} placeholder="Weight" />
                <input type="number" name="phone" id="phone" .value=${droneDetails.phone} placeholder="Phone Number for Contact" />
                <input type="text" name="condition" id="condition" .value=${droneDetails.condition} placeholder="Condition" />
                <textarea name="description" id="description" .value=${droneDetails.description} placeholder="Description"></textarea>
                <button type="submit">Edit</button>
            </form>
            </div>
        </section>`

export async function editPage(ctx) {
    const droneId = ctx.params.id; 
    const getResponse = await fetch(`http://localhost:3030/data/drones/${droneId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const droneDetails = await getResponse.json();    
    ctx.render(editTemplate(droneDetails));

    const form = document.querySelector('.edit-form');
    form.addEventListener('submit', onSubmit)

    async function onSubmit(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const editForm = new FormData(document.querySelector('.edit-form'));
        const model = editForm.get('model');
        const imageUrl = editForm.get('imageUrl');
        const price = editForm.get('price');
        const condition = editForm.get('condition');
        const weight = editForm.get('weight');
        const phone = editForm.get('phone');
        const description = editForm.get('description');
        
        if ([model, imageUrl, price, condition, weight, phone, description].some(x => x == '')) {
            displayError()
            return;
        }


        const putResponse = await fetch(`http://localhost:3030/data/drones/${droneId}`, {
            method: 'PUT',
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
                description
            })
        })

        page.redirect(`/details/${droneDetails._id}`)
    }
}
