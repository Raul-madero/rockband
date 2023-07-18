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
        ` 
        galeria.appendChild(imagen)
    }
}