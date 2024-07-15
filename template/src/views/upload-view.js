import { getUploads } from "../data/uploads.js";
import { fetchUploadedGifs } from "../requests/request-service.js";

export const toUploadView = () => `

<div id="uploaded">
  ${getUploads().map(gifId => `
    <div class="grid-item">
      <img class="gif-image" src="https://media.giphy.com/media/${gifId}/giphy.gif" alt="Uploaded GIF ${gifId}" data-gif-id="${gifId}">
    </div>
  `).join(`\n`) || '<p>You have no uploaded Gifs.</p>'}

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