import { HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { uploadGif } from './requests/request-service.js';
import { toGifDetails } from './views/gif-views.js';
import { uploadFile } from './events/upload.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', e => {

        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            loadPage(e.target.getAttribute('data-page'));
        }

        if (e.target.closest('#logo')) {
            e.preventDefault();
            loadPage(HOME);
        }

        if (e.target.classList.contains('detailed-func')) {
            const img = e.target.src;
            const imgParts = img.split('/');
            e.preventDefault();
            renderGifDetails(imgParts[imgParts.length - 2])
        }

    });

    q('input#search').addEventListener('input', e => {
        e.preventDefault();
        renderSearchItems(e.target.value);
    });

    loadPage(HOME);
});

