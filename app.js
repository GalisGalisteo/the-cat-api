const url = 'https://api.thecatapi.com/v1/images/search';

const fetchCatImg = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching advice');
    }
    const data = await response.json();
    return data;
}

const width = document.createElement('h2')
width.id = 'width';
const height = document.createElement('h2')
height.id = 'height';


const getCat = async () => {
    const catContainer = document.querySelector('#cat-container')
    try {
        const getCat = await fetchCatImg(url);
        document.querySelector('#cat-image').src = getCat[0].url;
        width.textContent = `Width: ${getCat[0].width}`;
        height.textContent = `Height: ${getCat[0].height}`;
        catContainer.appendChild(width)
        catContainer.appendChild(height)

    } catch (error) {
        const errorMessage = document.createElement('h2')
        errorMessage.textContent = 'Ups! The cat is hidden, please try again later.'
        catContainer.appendChild(errorMessage);
        console.error(error);
    }
}

window.addEventListener('load', () => {
    getCat();
})

document.querySelector('#get-cat').addEventListener('click', () => {
    getCat();
})
