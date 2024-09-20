function attachEvents() {
    
    const loadPostsButton = document.querySelector('#btnLoadPosts');
    const viewPostButton = document.querySelector('#btnViewPost');
    const postELement = document.querySelector('#posts');
    const postTitleElement = document.querySelector('#post-title');
    const postBodyElement = document.querySelector('#post-body');
    const postCommentElement = document.querySelector('#post-comments');
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts'; 

    loadPostsButton.addEventListener('click', () =>  {    
        fetch(postUrl)
            .then(res => res.json())
            .then(data => {               
                entriesArray = Object.values(data);
        
                let output = entriesArray.map(x => x.title);
                postIdArray = entriesArray.map(x => x.id);       
                let outputKeys = Object.keys(data);
                
                for (let i = 0; i < outputKeys.length; i++) {
                    let optionElement = document.createElement('option');
                    optionElement.textContent = output[i];
                    optionElement.value = outputKeys[i];                    
                    postELement.appendChild(optionElement);
                }   
            });
        });
    
    viewPostButton.addEventListener('click', (e) => {
        let targetId = postELement.value;
    
        fetch(commentsUrl)
            .then(res => res.json())
            .then(data => {
                const match = Object.values(data).find(comment => comment.postId === targetId);
                const obj = Object.values(entriesArray).find(id => id.id === targetId);
                postTitleElement.textContent = obj.title;
                postBodyElement.textContent = obj.body;
                postCommentElement.innerHTML = ''
                let liElement = document.createElement('li');
                liElement.textContent = match.text;
                postCommentElement.appendChild(liElement);
            })    
    });    
};

attachEvents();


