
//import renderFavoriteStatus when implemented
//${renderFavoriteStatus(gif.id)}
export const toGifSimple = (gif) => `
<div class="gif-simple">
  <h1>${gif.title}</h1>
  
  <img class="detailed-func" src="${gif.images.fixed_height.url}"><br>
</div>
`;

export const toGifDetails = (gif) => `
<div class="gif-detailed-info">
  <div class="poster">
    <img src="${gif.images.fixed_height.url}">
  </div>
  <div class="gif-info">
    <p>${gif.title}</p>
    <p>user: ${gif.username}</p>
    <p>Source: ${gif.source ? `<a href="${gif.source}" target="_blank">${gif.source}</a>` : 'Source not provided.'}</p>
    
    
  </div>
</div>
`;
