function getArticleGenerator(articles) {
    let contentElement = document.getElementById('content');

    return function () {
        let articleElement = document.createElement('article');

        if (articles.length) {
            articleElement.textContent = articles.shift();
            contentElement.appendChild(articleElement);
        } 
    }
}