export const toSearchView = (gifs, searchTerm) => `
<div id="search-bar">
  <h1>Gifs found for "${searchTerm}":</h1>
  <div class="content">

    ${gifs.map(toGifSimple).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}

  </div>
</div>s
`;