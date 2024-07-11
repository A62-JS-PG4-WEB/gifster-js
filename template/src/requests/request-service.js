export const loadSearchGifs = (searchTerm = '') => {
try {
    return fetch(`${API_URL}/gifs/search=${searchTerm}?api_key=${API_KEY}`)
      .then(response => response.json());

    } catch (err) {
    console.error('Error:', err);
    }
  };
  
