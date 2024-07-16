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
