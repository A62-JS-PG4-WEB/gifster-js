import { HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadGif } from './requests/request-service.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('submit', e => {
        e.preventDefault();
        if (e.target.classList.contains('upload')) {
        }
    })

    document.addEventListener('keydown', e => {
        if (e.target.classList.contains('search-bar') && e.key === 'Enter') {
            renderSearchItems(e.target.value)
        }
    })

    document.addEventListener('click', e => {

        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            loadPage(e.target.getAttribute('data-page'));
        }


        // if (e.target.classList.contains('gif-simple')) {

        // }

        // if (e.target.classList.contains('favorite')) {
        //   toggleFavoriteStatus(+e.target.getAttribute('data-movie-id'));
        // }
    });
    loadPage(HOME);

    // q('input#search').addEventListener('input', e => {
    //   renderSearchItems(e.target.value);
    // });



});

