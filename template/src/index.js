import { HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadGif } from './requests/request-service.js';
import { toGifDetails } from './views/gif-views.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('submit', e => {
        e.preventDefault();
        if (e.target.classList.contains('upload')) {
        }
    })

    document.addEventListener('click', e => {

        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            loadPage(e.target.getAttribute('data-page'));
        }

        // if (e.target.classList.contains('detailed-func')) {
        //     const img = e.target.src;
        //     const imgParts = img.split('/');
        //     e.preventDefault()
        //     toGifDetails(imgParts[imgParts.length - 2])
        // }
    });

    q('input#search').addEventListener('input', e => {
        renderSearchItems(e.target.value);
    });

    loadPage(HOME);
});

