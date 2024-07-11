export const renderSearchItems = (searchTerm) => {
    loadSearchGifs(searchTerm)
      .then(movies => q(CONTAINER_SELECTOR).innerHTML = toSearchView(movies, searchTerm));
  };
  