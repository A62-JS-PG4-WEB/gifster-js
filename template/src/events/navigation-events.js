import { HOME, FAVORITE, UPLOAD_GIF, ABOUT, CONTAINER_SELECTOR, UPLOADED_GIFS } from "../common/constant.js";
import { q, setActiveNav } from "./helpers.js"
import { fetchTrendingGifs, loadGifDetails } from "../requests/request-service.js";
import { toHomeView } from "../views/home-view.js";
import { toGifDetails } from "../views/gif-views.js";
import { toUploadView } from "../views/upload-view.js";
import { toFavoritesGifs } from "../views/favorites-view.js";

export const loadPage = (page = '') => {

    switch (page) {

        case HOME:
            setActiveNav(HOME);
            return renderHome();

        case FAVORITE:
            setActiveNav(FAVORITE);
            return renderFavorites();

        case UPLOAD_GIF:
            setActiveNav(UPLOAD_GIF);
            return renderUpload();


        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        /* if the app supports error login, use default to log mapping errors */
        default: return null;
    }

};


export const renderHome = () => {
    const container = document.querySelector('#container');
    container.innerHTML = toHomeView();

    const section = container.querySelector('section[aria-live="polite"]');

    fetchTrendingGifs()
        .then(gifs => {
            gifs.forEach(gif => {
                const img = document.createElement('img');
                img.src = gif.images.fixed_height.url;
                img.alt = gif.title;
                img.classList.add('gif-item'); // Add class for easier selection
                img.dataset.gifId = gif.id; // Store the GIF ID in a data attribute
                section.appendChild(img);
            });

            // Add event listeners for the GIFs
            const gifItems = section.querySelectorAll('.gif-item');
            gifItems.forEach(gif => {
                gif.addEventListener('click', (e) => {
                    const gifId = e.target.dataset.gifId;
                    renderGifDetails(gifId);
                });
            });
        })
        .catch(error => {
            console.error('Error displaying trending GIFs', error);
        });
};

export const renderGifDetails = (id = null) => {
    loadGifDetails(id)
        .then(gif => q(CONTAINER_SELECTOR).innerHTML = toGifDetails(gif.data))
        .catch(error => console.error(error.message))
};

export const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

export const renderAbout = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderFavorites = async () => {
    q(CONTAINER_SELECTOR).innerHTML = await toFavoritesGifs()
}
//     const favorites = getFavorites();
//   Promise.all(favorites.map(id => loadGifDetails(id)))
//     .then(favoriteGifs => q(CONTAINER_SELECTOR).innerHTML = toFavoritesGifs(favoriteGifs))
//     .catch(error => console.error(error.message));   }

