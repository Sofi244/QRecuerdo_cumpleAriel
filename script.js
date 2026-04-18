const musica = document.getElementById('musica');
const loader = document.getElementById('loader');
const content = document.getElementById('main-content');
const btnStart = document.getElementById('start-btn');
const btnToggle = document.getElementById('btn-toggle-music');

// Al presionar el botón de carga
btnStart.addEventListener('click', () => {
    loader.style.display = 'none';
    content.style.display = 'block';
    musica.play();
    lanzarEfectos();
});

// Botón para parar/seguir la música
btnToggle.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btnToggle.innerText = "Detener Música";
    } else {
        musica.pause();
        btnToggle.innerText = "Reproducir Música";
    }
});

function lanzarEfectos() {
    // Generar tortas voladoras
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            let torta = document.createElement('div');
            torta.className = 'torta';
            torta.innerText = '🎂';
            torta.style.top = Math.random() * 80 + "vh";
            document.body.appendChild(torta);
        }, i * 2000);
    }

    // Generar serpentinas de colores
    const colores = ['#FF4136', '#FFDC00', '#2ECC40', '#B10DC9', '#0074D9'];
    setInterval(() => {
        let s = document.createElement('div');
        s.className = 'serpentina';
        s.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        s.style.left = Math.random() * 100 + "vw";
        s.style.top = "-20px";
        s.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(s);
        
        // Limpiar para no sobrecargar el navegador
        setTimeout(() => s.remove(), 6000);
    }, 200);
}