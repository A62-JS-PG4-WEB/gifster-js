import { API_KEY, API_URL } from "../common/constant.js";

export const loadGifDetails = (gifId) => {

    try {
        const url = `${API_URL}/gifs/${gifId}?api_key=${API_KEY}`;
        const loadGifDetails = fetch(url)
            .then(response => response.json());
        return loadGifDetails;
    }
    catch (error) {
        console.error('Error:', error);
    }
};

export const uploadGif = (gif) => {
    // check file is up to 100MB -> in class
    if (gif.size > 100 * 1024 * 1024) {
        console.error('File size exceeds 100MB');
        return;
    }

    const formData = new FormData();
    formData.append('file', gif);

    const url = `${API_URL}/${gif}?api_key=${API_KEY}`;

    try {
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } catch (error) {
        console.error('Error:', error);
    }
}

export const loadSearchGifs = (searchTerm = '') => {

    try {
        return fetch(`${API_URL}/gifs/search=${searchTerm}?api_key=${API_KEY}`)
            .then(response => response.json());

    } catch (err) {
        console.error('Error:', err);
    }
}


export const fetchTrendingGifs = async () => {
    try {
        const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}`);
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error('Error:', err);
    }
};
