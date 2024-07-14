import { CONTAINER_SELECTOR } from "../common/constant.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";

export const renderSearchItems = (searchTerm) => {
  loadSearchGifs(searchTerm)
    .then(gifs => q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs.data, searchTerm));
};

