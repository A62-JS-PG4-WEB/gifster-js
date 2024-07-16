import { CONTAINER_SELECTOR } from "../common/constant.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";

export const renderSearchItems = async (searchTerm, inputSearch) => {
  try {
    const gifs = await loadSearchGifs(searchTerm);
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs.data, searchTerm);
    inputSearch.value = '';
  } catch (error) {
    console.error('Error loading search GIFs:', error);
  }
};