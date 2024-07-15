import { HOME, FAVORITES, UPLOAD_GIF, ABOUT, CONTAINER_SELECTOR } from "../common/constant.js";
import { q, qs, setActiveNav } from "./helpers.js"
import { fetchTrendingGifs, loadGifDetails } from "../requests/request-service.js";
import { toHomeView } from "../views/home-view.js";
import { toGifDetails } from "../views/gif-views.js";
import { toUploadView } from "../views/upload-view.js";
import { toFavoritesGifs } from "../views/favorites-view.js";
import { toAboutView } from "../views/about-view.js"
import { getFavorites } from "../data/favorites-gifs.js";


export const loadPage = (page = '') => {

    switch (page) {

        case HOME:
            setActiveNav(HOME);
            return renderHome();

        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();

        case UPLOAD_GIF:
            setActiveNav(UPLOAD_GIF);
            return renderUpload();

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        default: return null;
    }

};


export const renderHome = () => {
    const container = q('#container');
    container.innerHTML = toHomeView();

    const section = q('section[aria-live="polite"]');

    fetchTrendingGifs()
        .then(gifs => {
            gifs.forEach(gif => {
                const img = document.createElement('img');
                img.src = gif.images.fixed_height.url;
                img.alt = gif.title;
                img.classList.add('gif-item');
                img.dataset.gifId = gif.id;
                img.style.borderRadius = '30px'
                img.style.justifyContent = 'center'
                img.style.padding = '15px'
                section.appendChild(img);
            });


            const gifItems = qs('.gif-item');
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

// export const renderUpload = () => {
//     fetchUploadedGifs()
//    .then(gif => 
//    {console.log(gif.data); 
//     q(CONTAINER_SELECTOR).innerHTML = toUploadView(gif.data)}
//    )
// };

export const renderAbout = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderFavorites = async () => {
    const favorites = getFavorites();
    console.log('renderFavorites function called. Current favorites:', favorites);

    Promise.all(favorites.map(id => loadGifDetails(id)))
        .then(returnedResults => {
            const favoriteGifs = returnedResults.map(result => result.data)
            console.log('Fetched favorite GIFs:', favoriteGifs);
            q(CONTAINER_SELECTOR).innerHTML = toFavoritesGifs(favoriteGifs);
        })
        .catch(error => console.error(error.message));
}

