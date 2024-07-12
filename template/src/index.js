import { HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { uploadGif } from './requests/request-service.js';
import { toGifDetails } from './views/gif-views.js';

document.addEventListener('DOMContentLoaded', () => {

    // document.addEventListener('keydown', (e) => {
    //     if (e.target.classList.contains('search-bar') && e.key === 'Enter') {
    //         renderSearchItems(e.target.value)
    //     }
    // })

    document.addEventListener('click', e => {

        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            loadPage(e.target.getAttribute('data-page'));
        }


        if (e.target.classList.contains('detailed-func')) {
            const img = e.target.src;
            const imgParts = img.split('/');
            e.preventDefault();
            renderGifDetails(imgParts[imgParts.length - 2])
        }

        // if (e.target.classList.contains('favorite')) {
        //     toggleFavoriteStatus(+e.target.getAttribute('data-gif-id'));
        //   }



    });

    q('input#search').addEventListener('input', e => {
        e.preventDefault();
        renderSearchItems(e.target.value);
    });

    loadPage(HOME);
});

