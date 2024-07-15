let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gifId) => {
    console.log('add favotites func:', gifId);
  if (favorites.find(id => id === gifId)) {
    // Gif has already been added to favorites
    return;
  }

  favorites.push(gifId);
  console.log('favotites arr:', favorites);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (gifId) => {
    console.log('remove favotites func:', gifId);
    
  favorites = favorites.filter(id => id !== gifId);
  console.log('favotites arr after remove:', favorites);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};


export const getFavorites = () => [...favorites];


