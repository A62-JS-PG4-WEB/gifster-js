import { ABOUT, HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { uploadFile } from './events/upload.js';

document.addEventListener('DOMContentLoaded', () => {


    document.addEventListener('click', e => {

        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            loadPage(e.target.getAttribute('data-page'));
        }

        if (e.target.closest('#logo')) {
            e.preventDefault();
            loadPage(HOME)
        }

        if (e.target.classList.contains('about')) {
            e.preventDefault();
            loadPage(ABOUT)
        }


        if (e.target.classList.contains('detailed-func')) {
            const img = e.target.src;
            const imgParts = img.split('/');
            e.preventDefault();
            renderGifDetails(imgParts[imgParts.length - 2])
        }

        if (e.target.classList.contains('gif-image')) {
            const gifId = e.target.getAttribute('data-gif-id');
            e.preventDefault();
            renderGifDetails(gifId);
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
            const fileInput = document.querySelector('#upload-gif');
            fileInput.classList.toggle('hidden-input');
            fileInput.click(); // Simulate a click on the file input
            fileInput.classList.toggle('hidden-input'); // Toggle back after click
        }

    });

    document.addEventListener('change', e => {

        if (e.target.id === 'upload-gif') {
            const fileInput = document.querySelector('#upload-gif');
            const selectedFile = fileInput.files[0];
            if (selectedFile) {
                console.log('Selected file:', selectedFile);
                uploadFile(selectedFile);
            }
        }

    });

    q('input#search').addEventListener('input', e => {
        e.preventDefault();
        renderSearchItems(e.target.value);
    });

    loadPage(HOME);
});


