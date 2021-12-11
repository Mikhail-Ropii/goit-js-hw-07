import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div >
        `
    }).join('');
};

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    const imgSrc = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src=${imgSrc} width="800" height="600">
`)
    instance.show();
}



console.log(createGalleryMarkup);
console.log(galleryItems);