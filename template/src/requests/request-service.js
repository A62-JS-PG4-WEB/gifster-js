import { API_KEY, API_URL } from "../common/constant.js";

export const loadGifDetails = async (gifId) => {
    const url = `${API_URL}/${gifId}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const loadGifDetails = await response.json();
    return loadGifDetails;
}

export const uploadGif = async (formData) => {
    const response = await fetch('https://upload.giphy.com/v1/gifs', {
        method: 'POST',
        body: formData
    });
    const uploadResponse = await response.json();
    return uploadResponse;
};

export const loadSearchGifs = async (searchTerm = '') => {
    const response = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}`);
    const searchResults = await response.json();
    return searchResults;
}

export const fetchTrendingGifs = async () => {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}`);
    const trendingGifs = await response.json();
    return trendingGifs.data;
};

export const fetchUploadedGifs = async () => {
    const tag = 'group4';
    const username = 'fantastic4group';
    const query = `@${username}`;
    const response = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${tag}`);
    const uploadedGifs = await response.json();
    return uploadedGifs;
}