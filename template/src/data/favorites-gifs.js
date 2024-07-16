/**
 * @description Module to manage favorite GIFs stored in local storage.
 */

/**
 * Array to store favorite GIF IDs, initialized from local storage.
 * @type {Array<string>}
 */
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF ID to the list of favorite GIFs if it is not already present.
 * @function
 * @param {string} gifId - The ID of the GIF to add to favorites.
 */
export const addFavorite = (gifId) => {
    if (favorites.find(id => id === gifId)) {
        return;
    }

    favorites.push(gifId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a GIF ID from the list of favorite GIFs.
 * @function
 * @param {string} gifId - The ID of the GIF to remove from favorites.
 */
export const removeFavorite = (gifId) => {
    favorites = favorites.filter(id => id !== gifId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Gets the list of favorite GIF IDs.
 * @function
 * @returns {Array<string>} An array of favorite GIF IDs.
 */
export const getFavorites = () => [...favorites];
