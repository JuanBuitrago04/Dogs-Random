const API_KEY = 'live_mv6AcuK1PM4fVRCRfQumdNftxpX0LGCShJiBLxIYqZ0SHAMpYxR54rAhl8UpEqST';
const url = 'https://api.thedogapi.com/v1/images/search';

// Elementos del DOM
const dogImage = document.getElementById('dogImage');
const getDogButton = document.getElementById('getDogButton');

// Función para obtener una imagen aleatoria de perro
async function getRandomDog() {
    try {
        const response = await fetch(url, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        const data = await response.json();
        dogImage.src = data[0].url;
    } catch (error) {
        console.error("Error al obtener la imagen del perro: ", error);
    }
}

// Evento del botón para mostrar una imagen
getDogButton.addEventListener('click', getRandomDog);

// Cargar una imagen al cargar la página
document.addEventListener('DOMContentLoaded', getRandomDog);