function allPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(respose => respose.json())
        .then(fetchData => allPostData(fetchData));
}
allPost();

function allPostData(data) {
    const sectionBlock = document.getElementById('post-area');
    for (const elements of data) {
        const div = document.createElement('div');
        div.classList.add('post-box');
        div.innerHTML = `
        <h3>${elements.title}</h3>
        <p>${elements.body}</p>`;
        sectionBlock.appendChild(div);
    }
}