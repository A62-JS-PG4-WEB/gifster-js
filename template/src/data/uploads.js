let uploads = JSON.parse(localStorage.getItem('upload')) || [];
 
export const addUpload = (gifId) => {
  if (!uploads.includes(gifId)) {
    uploads.push(gifId);
    localStorage.setItem('upload', JSON.stringify(uploads));
  }
};
 
export const getUploads = () => [...uploads];