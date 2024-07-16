import { getUploads } from "../data/uploads.js";

export const toUploadView = () => `

<div id="uploaded">
<div id="upload">
  <h1>My uploaded GIFs</h1>
        <hr>
     <div class="content">
  ${getUploads().map(gifId => `
    
      <img class="gif-image" src="https://media.giphy.com/media/${gifId}/giphy.gif" alt="Uploaded GIF ${gifId}" data-gif-id="${gifId}">
   
  `).join(`\n`) || '<p>You have no uploaded Gifs.</p>'}
 </div>
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
// //${getUploads().map(gifId => `