import { toGifSimple } from "./gif-views.js";

export const toSearchView = (gifs, searchTerm) => `
<div id="search-bar">
  <h1>Gifs found for "${searchTerm}":</h1>
  <div class="content">

    ${gifs.map(toGifSimple).join('\n') || '<p>None of our gifs match your criteria.</p>'}

  </div>
</div>
`;

