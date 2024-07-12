export const loadPage = (page = '') => {

    switch (page) {

        case HOME:
            setActiveNav(HOME);
            return renderHome();

        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();

        case UPLOAD_GIF:
            setActiveNav(UPLOAD_GIF);
            return renderUpload();

        case UPLOADED_GIFS:
            setActiveNav(UPLOADED_GIFS);
            return renderUploaded();

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        /* if the app supports error login, use default to log mapping errors */
        default: return null;
    }

};
export const renderGifDetails = (id = null) => {
    loadGifDetails(id)
    .then(gif => q(CONTAINER_SELECTOR).innerHTML = toGifDetails(gif.data))
    .catch(error => console.error(error.message))
  };

  export const renderUploadGif = (id = null) => {
    loadGifDetails(id)
    .then(gif => q(CONTAINER_SELECTOR).innerHTML = toGifDetails(gif.data))
    .catch(error => console.error(error.message))
  };

  const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
  };