import { API_KEY, API_URL } from "../common/constant.js";

/**
 * Loads details of a GIF using its ID.
 *
 * @param {string} gifId - The ID of the GIF to load details for.
 * @returns {Promise<object>} A promise that resolves to the loaded GIF details.
 */
export const loadGifDetails = async (gifId) => {
    const url = `${API_URL}/${gifId}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const gifDetails = await response.json();
    return gifDetails;
};

/**
 * Uploads a GIF file to the server.
 *
 * @param {FormData} formData - The FormData object containing the GIF file and additional data.
 * @returns {Promise<object>} A promise that resolves to the upload response.
 */
export const uploadGif = async (formData) => {
    const response = await fetch('https://upload.giphy.com/v1/gifs', {
        method: 'POST',
        body: formData
    });
    const uploadResponse = await response.json();
    return uploadResponse;
};

/**
 * Loads search results for GIFs based on a search term.
 *
 * @param {string} [searchTerm=''] - The search term to query GIFs.
 * @returns {Promise<object>} A promise that resolves to the search results.
 */
export const loadSearchGifs = async (searchTerm = '') => {
    const response = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}`);
    const searchResults = await response.json();
    return searchResults;
};

/**
 * Fetches trending GIFs from the API.
 *
 * @returns {Promise<object[]>} A promise that resolves to an array of trending GIFs.
 */
export const fetchTrendingGifs = async () => {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}`);
    const trendingGifs = await response.json();
    return trendingGifs.data;
};

/**
 * Fetches a random GIF from the API.
 *
 * @returns {Promise<object>} A promise that resolves to a random GIF.
 */
export const fetchRandomGif = async () => {
    const response = await fetch(`${API_URL}/random?api_key=${API_KEY}`);
    const randomGif = await response.json();
    return randomGif.data;
};