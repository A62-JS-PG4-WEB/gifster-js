import { addFavorite, getFavorites, removeFavorite } from "../data/favorites-gifs.js";
import { q, renderFavoriteStatus } from "./helpers.js";

/**
 * Toggles the favorite status of a GIF. 
 *
 * @param {string} gifId - The ID of the GIF to toggle the favorite status for.
 */
export const toggleFavoriteStatus = (gifId) => {
    const favorites = getFavorites();

    if (favorites.includes(gifId)) {
        removeFavorite(gifId);
    } else {
        addFavorite(gifId);
    }

    q(`span[data-gif-id="${gifId}"]`).innerHTML = renderFavoriteStatus(gifId);
};
