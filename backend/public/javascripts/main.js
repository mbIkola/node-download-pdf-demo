
console.log("Hello world");


function clickHandler() {
    fetch('/pdf')
        .then(response => response.body)
        .then(bodyStream => new Response(bodyStream))
        .then(cachedResponse => cachedResponse.blob())
        .then(blob => URL.createObjectURL(blob))
        .then(url => {
            console.log("THe uri: ", url);
            return url;
        })
        .then(url => {
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', "the-bill.pdf");
            a.setAttribute('target', "_blank");
            return a;
        })
        .then(a => {
            document.body.appendChild(a);
            return a;
        })
        .then(a => a.click())
        .catch(err => alert(err));
}



document.addEventListener('DOMContentLoaded', () => {
document.getElementById('button').addEventListener('click', clickHandler);
});
