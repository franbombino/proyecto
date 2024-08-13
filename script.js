let count = 0;

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Evita que el menú contextual aparezca
    count += 3;
    document.getElementById('counter').textContent = count;
});