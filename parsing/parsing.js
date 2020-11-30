const parent = document.querySelector('body');
let content;

function search(element) {
    element.childNodes.forEach(node => {

        if (node.nodeName === "#text") {
            content = node.textContent;
            return;
        }
        search(node);

    });
}

search(parent);
fetch('https://github.com/VladislavBegun/SC', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        parent: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(result => console.log(result));
