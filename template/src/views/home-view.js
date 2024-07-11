import { fetchTrendingGifs } from "../requests/request-service.js";

export const displayTrendingGifs = async () => {
    try {
        const gifs = await fetchTrendingGifs()
        const section = document.querySelector('section[aria-live="polite"]')
        section.innerHTML = ''
        gifs.forEach(gif => {
            const img = document.createElement('img')
            img.src = gif.images.fixed_height.url
            img.alt = gif.title
            section.appendChild(img)
        });
    } catch (error) {
        console.error('Error displaying trending GIFs', error)
    }
};