import { CONTAINER_SELECTOR } from "../common/constant";
import { loadSearchGifs } from "../requests/request-service";
import { toSearchView } from "../views/search-view";
import { q } from "./helpers";
export const renderSearchItems = (searchTerm) => {
    loadSearchGifs(searchTerm)
      .then(movies => q(CONTAINER_SELECTOR).innerHTML = toSearchView(movies, searchTerm));
  };
  