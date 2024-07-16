import { ABOUT, HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderGifDetails } from './events/navigation-events.js';
import { uploadFile } from './events/upload.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';

document.addEventListener('DOMContentLoaded', () => {

    const handleHeartIconHover = () => {
        const heartIcons = document.qs('.heart-icon');

        heartIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.2)'; // Enlarge the heart icon on hover
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1)'; // Reset the heart icon size when not hovered
            });
        });
    };

    // Handle click events
    document.addEventListener('click', e => {
        // Navigation link clicked
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            handleNavClick(e);
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

    loadPage(HOME);
});

// CSS eventListeners button color change

function handleNavClick(event) {
    event.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});

