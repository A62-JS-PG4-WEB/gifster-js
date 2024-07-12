import { HOME } from "../common/constant.js";
import { setActiveNav } from "./helpers.js"
import { fetchTrendingGifs, loadGifDetails } from "../requests/request-service.js";
import { toHomeView } from "../views/home-view.js";
import { toGifDetails } from "../views/gif-views.js";


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
            return renderUploadGif();

            //missing implementation:
        // case UPLOADED_GIFS:
        //     setActiveNav(UPLOADED_GIFS);
        //     return renderUploaded();

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        /* if the app supports error login, use default to log mapping errors */
        default: return null;
    }

};


export const renderHome = async () => {
    const container = document.querySelector('#container');
    container.innerHTML = toHomeView();

    const section = container.querySelector('section[aria-live="polite"]');

    try {
        const gifs = await fetchTrendingGifs();
        gifs.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            img.alt = gif.title;
            section.appendChild(img);
        });
    } catch (error) {
        console.error('Error displaying trending GIFs', error);
    }
};

export const renderGifDetails = (id = null) => {
    loadGifDetails(id)
    .then(gif => q(CONTAINER_SELECTOR).innerHTML = toGifDetails(gif.data))
    .catch(error => console.error(error.message))
  };

  export const renderUploadGif = (id = null) => {
    uploadGif(id)
    .then(gif => q(CONTAINER_SELECTOR).innerHTML = toGifDetails(gif.data))
    .catch(error => console.error(error.message))
  };

  const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
  };