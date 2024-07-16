import { renderFavoriteStatus } from "../events/helpers.js";

const getDomainFromUrl = (url) => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch (error) {
    return '';
  };
};

export const toGifSimple = (gif) =>
  `<div class="gif-simple">

<div class="gif-image-container">
  <img class="detailed-func" src="${gif.images.fixed_height.url}" alt="GIF Image">
  </div>
</div>
`;

export const toGifDetails = (gif) => {
  const domain = gif.source ? getDomainFromUrl(gif.source) : '';
  return `
    <div class="gif-detailed-container">
      <div class="gif-detailed-info">
        <div class="gif-title bold-text">${gif.title}</div>
        <div class="poster">
          <img src="${gif.images.fixed_height.url}" alt="GIF Image">
        </div>
        <div class="gif-info">
          <p class="bold-text">
            <span class="heart-icon" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</span> Mark as Favorite
          </p>
          <p class="bold-text">User: ${gif.username}</p>
          ${domain ? `<p class="bold-text">Source: <a href="${gif.source}" target="_blank">${domain}</a></p>` : ''}
        </div>
      </div>
    </div>`;
};
