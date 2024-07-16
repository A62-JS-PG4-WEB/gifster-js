import { toGifSimple } from "./gif-views.js";

export const toFavoritesGifs = (gifs) => `
<div id="favorite-gifs">
 <hr class="favorite-hr">
  <div class="content">
   ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

export const toRandomGif = (randomGif) => `
<div id="favorite-gifs">
 <hr class="favorite-hr">
  <div class="content">
  <p>You have no favorites yet. Showing a random GIF instead.</p>
   ${toGifSimple(randomGif)}
  </div>
</div>
`;
