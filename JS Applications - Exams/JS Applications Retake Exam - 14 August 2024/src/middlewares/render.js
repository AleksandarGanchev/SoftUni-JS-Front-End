import {render} from "../../node_modules/lit-html/lit-html.js"

const main = document.querySelector('#main');

function ctxRender(section) {
    render(section, main);
}

export function addRender(ctx, next) {
    
    ctx.render = ctxRender;
    next();
}

