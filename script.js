let count = 0;

// Función para actualizar el contador
function updateCounter() {
    count += 3;
    document.getElementById('counter').textContent = count;
}

// Evento para el clic derecho (contextmenu)
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault(); // Evita que el menú contextual aparezca
//     updateCounter();
// });

// Evento para el clic izquierdo (mousedown
// document.addEventListener('mousedown', function(event) {
//     if (event.button === 0) { // 0 es el código para el clic izquierd
//         updateCounter();
//     }
// });

// Evento para la barra espaciadora (keydown)
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') { // Verifica si la tecla presionada es la barra espaciadora
        updateCounter();
    }
});
