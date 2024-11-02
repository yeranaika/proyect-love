// Configuración de partículas con forma de corazón
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff99cc" // Color rosado de las partículas
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "image": {
                "src": "/resource/img/corazon-icon.png",
                "width": 34,
                "height": 34
            }
        },
        "opacity": {
            "value": 0.1,
            "random": true
        },
        "size": {
            "value": 22,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff99cc", // Color principal de las líneas de conexión en tono rosado
            "opacity": 0.6,
            "width": 2.5 // Grosor de las líneas de conexión
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// Sincronización del movimiento del círculo entre ventanas
const circle = document.getElementById('circle');

// Función para mover el círculo aleatoriamente
function moveCircle() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    circle.style.transform = `translate(${x}px, ${y}px)`;
    localStorage.setItem('circlePosition', JSON.stringify({ x, y }));
}

// Escucha cambios de almacenamiento local para sincronizar entre ventanas
window.addEventListener('storage', () => {
    const position = JSON.parse(localStorage.getItem('circlePosition'));
    if (position) {
        circle.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
});

// Mueve el círculo cada pocos segundos
setInterval(moveCircle, 2000);
