function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content
        }

        toString() {
            let arr = [`Post: ${this.title}`, `Content: ${this.content}`];
            return arr.join('\n')
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let arr = [
                `Post: ${this.title}`, 
                `Content: ${this.content}`,
                 `Rating: ${this.likes - this.dislikes}`,
            ];

            if (this.comments.length > 0) {
                arr.push( `Comments:`);
                this.comments.forEach(comment => {
                    arr.push(` * ${comment}`)
                })
            }

            return arr.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view() {
            this.views ++;
            return this;
        }

        toString() {
            let output = super.toString() + `\nViews: ${this.views}`;
            return output;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}
