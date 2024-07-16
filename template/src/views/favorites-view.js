import { toGifSimple } from "./gif-views.js";

/**
 * Generates HTML for displaying a list of favorite GIFs.
 *
 * @param {object[]} gifs - Array of GIF objects to display as favorites.
 * @returns {string} HTML content.
 */
export const toFavoritesGifs = (gifs) => `
<div id="favorite-gifs">
    <hr class="favorite-hr">
    <div class="content">
        ${gifs.map(toGifSimple).join('\n')}
    </div>
</div>
`;

/**
 * Generates HTML for displaying a random GIF when there are no favorites.
 *
 * @param {object} randomGif - Random GIF object to display.
 * @returns {string} HTML content.
 */
export const toRandomGif = (randomGif) => `
<div id="favorite-gifs">
    <hr class="favorite-hr">
    <div class="content">
        <p>You have no favorites yet. Showing a random GIF instead.</p>
        ${toGifSimple(randomGif)}
    </div>
</div>
`;
