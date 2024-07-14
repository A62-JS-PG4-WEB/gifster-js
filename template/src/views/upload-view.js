import { getUploads } from "../data/uploads.js";

export const toUploadView = () => `

<div id="upload">
 <input type="file" id="upload-gif" accept="image/*" class="hidden-input">
  <button id="upload-button">Upload GIF</button>
</div>
<div id="uploaded">
  ${getUploads().map(gifId => `
    <div class="grid-item">
      <img class="gif-image" src="https://media.giphy.com/media/${gifId}/giphy.gif" alt="Uploaded GIF ${gifId}" data-gif-id="${gifId}">
    </div>
  `).join(`\n`) || '<p>You have no uploaded Gifs.</p>'}
</div>
`;

