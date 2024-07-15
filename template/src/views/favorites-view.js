import { toGifSimple } from "./gif-views.js";

// ${gifs.map(toGifSimple).join('\n') || 
export const toFavoritesGifs = (gifs) => `

<div id="favorite gifs">
  <h1>Favorite gifs</h1>
  <hr>
  <div class="content">
   <p>${gifs.length > 0 ? gifs.map(toGifSimple).join('\n') : 'Add some gifs to favorites to see them here.'}</p>
  </div>
</div>
`;
