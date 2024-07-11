import { displayTrendingGifs } from "./views/home-view.js";
import { renderSearchItems } from "./events/search-events.js"

document.addEventListener('DOMContentLoaded', () => {


  // add global listener
  document.addEventListener('click', e => {

    // nav events
    if (e.target.classList.contains('nav-link')) {

      loadPage(e.target.getAttribute('data-page'));
    }

    // show category events
    if (e.target.classList.contains('view-category-btn')) {
      renderCategory(+e.target.getAttribute('data-category-id'));
    }

    // show gif events
    if (e.target.classList.contains('gif-simple')) {
      renderMovieDetails(+e.target.getAttribute('data-gif-id'));
    }

    // toggle favorite event
    //     if (e.target.classList.contains('favorite')) {
    //       toggleFavoriteStatus(+e.target.getAttribute('data-movie-id'));
    //     }

  });

  // search events
  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });
  displayTrendingGifs();
  loadPage(HOME);

});

