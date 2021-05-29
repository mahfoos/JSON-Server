// Javscript for index.html

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts'; //this the endpoint
    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);

    let template = "";
    posts.forEach(post => {
        template += `
            <div class= "post">
                <h2>
                    ${post.title}
                </h2>

            </div>
        `
    })
}

window.addEventListener("DOMContentLoaded", () => {
    renderPosts();
    
})