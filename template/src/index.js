
import { HOME } from './common/constant.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', e => {

    if (e.target.classList.contains('nav-link')) {
      loadPage(e.target.getAttribute('data-page'));
    }


    // if (e.target.classList.contains('gif-simple')) {

    // }

    // if (e.target.classList.contains('favorite')) {
    //   toggleFavoriteStatus(+e.target.getAttribute('data-movie-id'));
    // }
  });


  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });


  loadPage(HOME);
});

