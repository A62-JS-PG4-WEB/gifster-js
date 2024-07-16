import { uploadGif } from '../requests/request-service.js';
import { API_KEY } from '../common/constant.js';
import { q } from './helpers.js';
import { addUpload } from '../data/uploads.js';
import { showLoadingSpinner, hideLoadingSpinner } from '../requests/loading-event.js';

/**
 * Handles the upload of a GIF file.
 *
 * @returns {Promise<void>}
 */
export const uploadFile = async () => {
  const fileInput = q('#upload-gif');
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', API_KEY);
  formData.append('tags', 'fantastic4Group, Group4TeamProject');

  try {
    showLoadingSpinner();
    const data = await uploadGif(formData);

    if (data.meta.status === 200) {
      alert('Yey! Your GIF is here!');
      const uploadedGifId = data.data.id;
      addUpload(uploadedGifId);
    } else {
      alert('Oops...Failed to upload GIF. Status: ' + data.meta.status);
    }
  } catch (error) {
    console.error('Error uploading GIF:', error.message);
    alert('Error uploading GIF: ' + error.message);
  } finally {
    hideLoadingSpinner();
  }
};
