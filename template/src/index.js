import { HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { uploadGif } from './requests/request-service.js';
import { toGifDetails } from './views/gif-views.js';
import { uploadFile } from './events/upload.js';

document.addEventListener('DOMContentLoaded', () => {

// test
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


        // if (e.target.classList.contains('add-to-favorites') || e.target.classList.contains('remove-from-favorites')) {
        //     const gifId = e.target.getAttribute('data-gif-id');
        //     if (gifId) {
        //        toggleFavoriteStatus(gifId);
        //     } else {
        //       console.error('GIF ID is undefined:', e.target);
        //     }
        //   }



        if (e.target.id === 'upload-button') {
            uploadFile();
          }


    });

    q('input#search').addEventListener('input', e => {
        e.preventDefault();
        renderSearchItems(e.target.value);
    });

    loadPage(HOME);
});

