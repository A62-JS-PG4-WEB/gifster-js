import { toGifSimple } from "./gif-views.js";

/**
 * Generates HTML for displaying search results for GIFs.
 *
 * @param {object[]} gifs - Array of GIF objects representing search results.
 * @param {string} searchTerm - The search term used to fetch the GIFs.
 * @returns {string} HTML content for displaying search results.
 */
export const toSearchView = (gifs, searchTerm) => `
<div id="search-bar">
    <h1>GIFs found for ${searchTerm}:</h1>
    <hr>
    <div class="content">
        ${gifs.length > 0 ? gifs.map(toGifSimple).join('\n') : '<p>None of our gifs match your criteria.</p>'}
    </div>
</div>
`;
