import { addFavorite, getFavorites, removeFavorite } from "../data/favorites-gifs.js";
import {q, renderFavoriteStatus } from "./helpers.js";

export const toggleFavoriteStatus = (gifId) => {
    
    console.log(`current favorite: ${gifId}`);
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    console.log(`Removing favorite: ${gifId}`);
    removeFavorite(gifId);
  } else {
    console.log(`Adding favorite: ${gifId}`);
    addFavorite(gifId);
  }

  q(`span[data-gif-id="${gifId}"]`).innerHTML = renderFavoriteStatus(gifId);
};

