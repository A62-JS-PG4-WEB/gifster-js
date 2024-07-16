/**
 * Managing GIF uploads using localStorage.
 */

/**
 * An array of uploaded GIF IDs retrieved from localStorage.
 * @type {string[]}
 */
let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

/**
 * Adds a GIF ID to the list of uploads.
 * Updates the localStorage with the new list of uploads.
 *
 * @param {string} gifId - The ID of the GIF to add to the uploads list.
 */
export const addUpload = (gifId) => {
  if (!uploads.includes(gifId)) {
    uploads.push(gifId);
    localStorage.setItem('uploads', JSON.stringify(uploads));
  }
};

/**
 * Retrieves the list of uploaded GIF IDs.
 *
 * @returns {string[]} A copy of the array of uploaded GIF IDs.
 */
export const getUploads = () => [...uploads];
