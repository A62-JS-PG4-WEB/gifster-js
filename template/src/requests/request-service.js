import { API_KEY, API_URL } from "../common/constant.js";

export const loadGifDetails = (gifId) => {

    try {
        const url = `${API_URL}/${gifId}?api_key=${API_KEY}`;
        //await or catch after then
        const loadGifDetails = fetch(url)
            .then(response => response.json());
        return loadGifDetails;
    }
    catch (error) {
        console.error('Error:', error);
    }
}

// export const loadSingleGif = async (gifId) => {

//     return await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`)
//       .then(response => response.json()); 
//   };

export const uploadGif = async (formData) => {

    return await fetch('https://upload.giphy.com/v1/gifs', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching upload API:', error.message);
            alert('Error fetching upload API:', error.message);
        })
};

export const loadSearchGifs = (searchTerm = '') => {
//await
    try {
        return fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}`)
            .then(response => response.json());
    } catch (err) {
        console.error('Error:', err);
    }
}

export const fetchTrendingGifs = () => {
    try {
        return fetch(`${API_URL}/trending?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => data.data);
    } catch (err) {
        console.error('Error:', err);
    }
};

export const fetchUploadedGifs = () => {

    try {
        
        const tag = 'group4';
        const username = 'fantastic4group';
        const query = `@${username}`;
        return fetch(`${API_URL}/search?api_key=${API_KEY}&q=${tag}`)
        .then(response => response.json());
    }
    catch (err) {
        console.error('Error:', err);
    }
}