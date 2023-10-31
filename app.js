const catUrl = 'https://api.thecatapi.com/v1/images/search';
const dogUrl = 'https://api.thedogapi.com/v1/images/search';

const fetchImg = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching data');
    }
    const data = await response.json();
    return data;
}

const width = document.createElement('h2');
width.id = 'width';
const height = document.createElement('h2');
height.id = 'height';


const getPet = async (petUrl) => {
    const petContainer = document.querySelector('#pet-container');
    try {
        const getPet = await fetchImg(petUrl);
        const petImg = document.querySelector('#pet-image');
        petImg.src = getPet[0].url;
        petImg.style.display = 'block';
        width.textContent = `Width: ${getPet[0].width}`;
        height.textContent = `Height: ${getPet[0].height}`;
        petContainer.appendChild(width);
        petContainer.appendChild(height);
    } catch (error) {
        const errorContainer = document.querySelector('#error-container');
        errorContainer.innerHTML = '';
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = 'Ups! The pet is hidden, please try again later.';
        errorContainer.appendChild(errorMessage);
        console.error(error);
    }
}

window.addEventListener('load', () => {
    const pet = document.querySelector('#pet');
    pet.addEventListener('change', () => {
        if (pet.value === 'cat') {
            getPet(catUrl);
        } else if (pet.value === 'dog') {
            getPet(dogUrl);
        }
    })
    document.querySelector('#get-pet').addEventListener('click', () => {
        if (pet.value === 'cat') {
            getPet(catUrl);
        } else if (pet.value === 'dog') {
            getPet(dogUrl);
        }
    })
})


