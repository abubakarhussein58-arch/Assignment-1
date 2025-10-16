// Hitta knappen och rubriken i HTML
const button = document.getElementById('colorButton');
const title = document.getElementById('title');

// När knappen klickas, ändras färgen på rubriken
button.addEventListener('click', function() {
    title.style.color = title.style.color === 'blue' ? 'green' : 'blue';
});
