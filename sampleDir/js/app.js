const button = document.querySelector('#btn');
const links = document.querySelectorAll('header a[data-href]');

if(button){
    button.addEventListener('click', () => {
        location.href = 'index.html';
    });
}


links.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const link = item.getAttribute('data-href');
        if(link){
            location.href = link;
        }
    });
});
