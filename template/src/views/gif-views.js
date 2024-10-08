import { renderFavoriteStatus } from "../events/helpers.js";

/**
 * Generates HTML for displaying a simple GIF view.
 *
 * @param {object} gif - The GIF object containing necessary details.
 * @returns {string} HTML content for displaying the simple GIF view.
 */
export const toGifSimple = (gif) => `
<div class="gif-simple">
    <div class="gif-image-container">
        <img class="detailed-func" src="${gif.images.fixed_height.url}" alt="GIF Image">
    </div>
</div>
`;

/**
 * Generates HTML for displaying detailed information about a GIF.
 *
 * @param {object} gif - The GIF object containing detailed information.
 * @returns {string} HTML content for displaying the detailed GIF view.
 */
export const toGifDetails = (gif) => {
    const domain = gif.source ? getDomainFromUrl(gif.source) : '';
    return `
    <div class="gif-detailed-info">
        <div id="detail-gif">
            <h1>GIFy details</h1>
            <hr>
            <div class="content-detailed-gif">
                <p>${gif.title}</p>
                <p class="add-to-favorite">Favorite: ${renderFavoriteStatus(gif.id)}</p>
                <div class="poster">
                    <img src="${gif.images.fixed_height.url}" alt="GIF Image">
                    <div class="details">
                        <p>user: ${gif.username}</p>
                        <p>Source: ${domain ? `<a href="${gif.source}" target="_blank">${domain}</a>` : 'Source not provided.'}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};

/**
 * Extracts and returns the domain from a given URL.
 *
 * @param {string} url - The URL from which to extract the domain.
 * @returns {string} The extracted domain or an empty string if the URL is invalid.
 */
const getDomainFromUrl = (url) => {
    try {
        return new URL(url).hostname.replace('www.', '');
    } catch (error) {
      console.error('Invalid URL:', error);
      return '';
    }
};