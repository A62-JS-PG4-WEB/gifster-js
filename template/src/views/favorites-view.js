import { toGifSimple } from "./gif-views.js";

export const toFavoritesGifs = (gifs) => `
<div id="Favorite gifs">
  <h1>Favorite gifs:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}
  </div>
</div>
`;
