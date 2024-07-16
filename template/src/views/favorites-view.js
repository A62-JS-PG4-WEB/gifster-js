import { toGifSimple } from "./gif-views.js";

export const toFavoritesGifs = (gifs) => `
<div id="favorite gifs">
  <h1>Favorite gifs</h1>
  <hr>
  <div class="content">
   ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

export const toRandomGif = (randomGif) => `
<div id="favorite gifs">
  <h1>My Fav GIFs</h1>
  <hr>
  <div class="content">
  <p>You have no favorites yet. Showing a random GIF instead.</p>
   ${toGifSimple(randomGif)}
  </div>
</div>
`;
// 'Add some gifs to favorites to see them here.'