import page from "../../node_modules/page/page.mjs";

export async function deletePage(ctx) {
    const user = JSON.parse(localStorage.getItem('user'));
    const droneId = ctx.params.id;

    const confirmed = confirm('Are you sure you want to delete this drone');
    if (confirmed) {
            await fetch(`http://localhost:3030/data/drones/${droneId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken,
            }
        })
        page.redirect('/marketplace')
    }
}