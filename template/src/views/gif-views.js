export const toGifSimple = (gif) => `
<div class="gif-simple">
  <h1>${gif.title}</h1>
  <img src="${gif.poster}"><br>
</div>
`;

const toGifDetails = (gif) => `
<div class="gif-detailed">
//   <div class="poster">
//     <img src="${gif.images.original.url}">
  </div>
  <div class="gif-info">
    <p>Title: ${gif.title}</p>
    <p>user: ${gif.username}</p>
    <p>Source: ${gif.source_post_url}</p>
    class:"data-gif-id"="${gif.id}"
     ${renderFavoriteStatus(gif.id)}
  </div>
</div>
`;
