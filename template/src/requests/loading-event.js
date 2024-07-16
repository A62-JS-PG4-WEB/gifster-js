/**
 * Displays a loading spinner on the page.
 */
export const showLoadingSpinner = () => {
    const spinner = document.getElementById('loading-spinner');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    spinner.style.display = 'block';
};

/**
 * Hides the loading spinner from the page.
 */
export const hideLoadingSpinner = () => {
    const spinner = document.getElementById('loading-spinner');
    const overlay = document.querySelector('.overlay');

    spinner.style.display = 'none';
    if (overlay) {
        document.body.removeChild(overlay);
    }
};