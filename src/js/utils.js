const imagesLoaded = require('imagesloaded');

// Preload images
const preloadImages = (selector = 'img def') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

export { 
    preloadImages
};