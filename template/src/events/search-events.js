import { CONTAINER_SELECTOR } from "../common/constant.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";

/**
 * Renders the search results for a given search term.
 *
 * @param {string} searchTerm - The search term to fetch GIFs for.
 * @param {HTMLInputElement} inputSearch - The input element for search, used to clear its value after rendering.
 * @returns {Promise<void>}
 */
export const renderSearchItems = async (searchTerm, inputSearch) => {
  try {
    const gifs = await loadSearchGifs(searchTerm);
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs.data, searchTerm);
    inputSearch.value = '';
  } catch (error) {
    console.error('Error loading search GIFs:', error);
  }
};
