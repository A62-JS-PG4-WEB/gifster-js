import { getUploads } from "../data/uploads.js";

export const toUploadView = () => `

<div id="uploaded">
 <hr class="uploaded-hr">
<div id="upload">
       <div class="content">
  ${getUploads().map(gifId => `
    
      <img class="gif-image" src="https://media.giphy.com/media/${gifId}/giphy.gif" alt="Uploaded GIF ${gifId}" data-gif-id="${gifId}">
   
  `).join(`\n`) ||  '<p class="no-uploads-msg">You have no uploaded Gifs.</p>'}
 </div>
</div>
</div>
`;
