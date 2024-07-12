
//import renderFavoriteStatus when implemented
//${renderFavoriteStatus(gif.id)}
export const toGifSimple = (gif) => `
<div class="gif-simple">
  <h1>${gif.title}</h1>
  
  <img class="detailed-func" src="${gif.images.fixed_height.url}"><br>
</div>
`;

export const toGifDetails = (gif) => `
<div class="gif-detailed">
  <div class="poster">
    <img src="${gif.images.fixed_height.url}">
  </div>
  <div class="gif-info">
    <p>Title: ${gif.title}</p>
    <p>user: ${gif.username}</p>
    <p>Source: ${gif.source || '<p>Source not provided.</p>'}</p>
    class:"data-gif-id"="${gif.id}"
    
  </div>
</div>
`;
