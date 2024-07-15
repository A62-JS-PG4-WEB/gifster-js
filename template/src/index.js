import { ABOUT, FAVORITES, HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { uploadFile } from './events/upload.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';

document.addEventListener('DOMContentLoaded', () => {

    // Handle click events
    document.addEventListener('click', e => {
        // Navigation link clicked
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            loadPage(e.target.getAttribute('data-page'));
        };

        // Logo clicked
        if (e.target.closest('#logo')) {
            e.preventDefault();
            loadPage(HOME);
        };

        // About link clicked
        if (e.target.classList.contains('about')) {
            e.preventDefault();
            loadPage(ABOUT);
        };

        if (e.target.classList.contains('favorite')) {
            toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));
        };

        // Detailed GIF view clicked
        if (e.target.classList.contains('detailed-func')) {
            const img = e.target.src;
            const imgParts = img.split('/');
            e.preventDefault();
            renderGifDetails(imgParts[imgParts.length - 2]);
        };

        // GIF image clicked
        if (e.target.classList.contains('gif-image')) {
            const gifId = e.target.getAttribute('data-gif-id');
            e.preventDefault();
            renderGifDetails(gifId);
        };

        // Upload button clicked
        if (e.target.id === 'upload-button') {
            const fileInput = document.querySelector('#upload-gif');
            fileInput.classList.toggle('hidden-input');
            fileInput.click();
            fileInput.classList.toggle('hidden-input');
        };

        // Theme button clicked
        if (e.target.id === 'theme-button') {
            e.preventDefault();
            const themePicker = q('#theme-picker');
            themePicker.click();
        };
    });

    // Handle file input change event
    document.addEventListener('change', e => {
        if (e.target.id === 'upload-gif') {
            const fileInput = document.querySelector('#upload-gif');
            const selectedFile = fileInput.files[0];
            if (selectedFile) {
                uploadFile(selectedFile);
            }
        }
    });

    // Handle search input
    q('input#search').addEventListener('keypress', async e => {
        if (e.key === 'Enter') { 
        e.preventDefault();
        await renderSearchItems(e.target.value, e.target);
        }
    });

    // Handle theme picker input
    document.addEventListener('input', e => {
        if (e.target.id === 'theme-picker') {
            const selectedColor = e.target.value;
            applyTheme(selectedColor);
        }
    });

    // Apply selected theme
    const applyTheme = (color) => {
        document.body.style.backgroundColor = color;
    };

    // Load the home page initially
    loadPage(HOME);
});

