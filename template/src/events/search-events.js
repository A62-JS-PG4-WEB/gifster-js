export const renderSearchItems = (searchTerm) => {
    loadSearchGifs(searchTerm)
      .then(gifs => q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm));
  };
  