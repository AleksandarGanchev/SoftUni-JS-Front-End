import page from "../../node_modules/page/page.mjs";

export async function deletePage(ctx) {
    const id = ctx.params.id;
    const user = JSON.parse(localStorage.getItem('user'));


    const choice = confirm('Do you really want to delete this movie?')
    if (choice) {
        const deleteRequest = await fetch(`http://localhost:3030/data/shows/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken
            }
        });
        page.redirect('/tvshows');
    }  
}