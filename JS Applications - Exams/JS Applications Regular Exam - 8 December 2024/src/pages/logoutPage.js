import page from "../../node_modules/page/page.mjs";



export async function logoutPage() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    const getResponse = await fetch('http://localhost:3030/users/logout', {
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken
        }
    })

    localStorage.clear();
    page.redirect('/');
    
}