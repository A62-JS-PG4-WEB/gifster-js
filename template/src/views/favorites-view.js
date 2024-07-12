import { toGifSimple } from "./gif-views.js";

// ${gifs.map(toGifSimple).join('\n') || 
export const toFavoritesGifs = (gifs) => `

<div id="Favorite gifs">
  <h1>Favorite gifs:</h1>
  <div class="content">
   <p>Add some gifs to favorites to see them here.</p>
  </div>
</div>
`;
