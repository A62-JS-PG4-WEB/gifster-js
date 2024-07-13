
//import renderFavoriteStatus when implemented
//${renderFavoriteStatus(gif.id)}

// const getDomainFromUrl = (url) => {
//   try {
//     return new URL(url).hostname.replace('www.', '');
//   } catch (error) {
//     return '';
//   }
// };

export const toGifSimple = (gif) => 
`<div class="gif-simple">

<div class="gif-image-container">
  <img class="detailed-func" src="${gif.images.fixed_height.url}" alt="GIF Image">
</div>
</div>
`;

export const toGifDetails = (gif) => `
<div class="gif-detailed-info">
<div class="gif-info">
  <p>${gif.title}</p>
    <p>user: ${gif.username}</p>
    <p>Source: ${gif.source ? `<a href="${gif.source}" target="_blank">${gif.source}</a>` : 'Source not provided.'}</p>
 </div>    

  <div class="poster">
    <img src="${gif.images.fixed_height.url}" alt="GIF Image">
 
  </div>
</div>
`;

// export const toGifDetails = (gif) => {
//   const domain = gif.source ? getDomainFromUrl(gif.source) : '';
//   return `
//     <div class="gif-detailed-info">
//       <div class="gif-info">
//         <p>${gif.title}</p>
//         <p>user: ${gif.username}</p>
//         <p>Source: ${domain ? `<a href="${gif.source}" target="_blank">${domain}</a>` : 'Source not provided.'}</p>
//       </div>    
//       <div class="poster">
//         <img src="${gif.images.fixed_height.url}" alt="GIF Image">
//       </div>
//     </div>
//   `;
// };

//test