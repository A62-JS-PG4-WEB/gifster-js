import { FULL_HEART, EMPTY_HEART } from "../common/constant.js";
import { getFavorites } from "../data/favorites-gifs.js";

/**
 * Returns the first element that matches the specified selector.
 *
 * @param {string} selector - A CSS selector string.
 * @returns {Element} The first element that matches the selector.
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Returns a NodeList of elements that match the specified selector.
 *
 * @param {string} selector - A CSS selector string.
 * @returns {NodeList} A NodeList containing all elements that match the selector.
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Sets the active state on the navigation links based on the specified page.
 *
 * @param {string} page - The page identifier to set as active.
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array.from(navs).forEach(element => {
    element.getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active');
  });
};

/**
 * Renders the favorite status of a GIF based on whether it is in the favorites list.
 *
 * @param {string} gifId - The ID of the GIF to render the favorite status for.
 * @returns {string} HTML markup representing the favorite status of the GIF.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
