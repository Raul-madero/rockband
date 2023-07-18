document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});
function iniciarApp() {
    crearGaleria();
};
function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img load="lazy" src="img/thumb/${i}.jpg" alt="">    
        ` ;
        imagen.onclick = function() {
            mostrarImagen(i);
        };
        galeria.appendChild(imagen);
    };
};
function mostrarImagen(id) {
    const seleccion = document.querySelector('body');
    const imagen = document.createElement('picture');
    const cerrarModal = document.createElement('P');
        imagen.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img load="lazy" src="img/grande/${id}.jpg" alt="">    
        ` ;
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick = function() {
            seleccion.classList.remove('fijar-body')
            overlay.remove();
        };
        overlay.appendChild(cerrarModal);
        seleccion.appendChild(overlay);
        seleccion.classList.add('fijar-body');
}