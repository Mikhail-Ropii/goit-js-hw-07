import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        `
    }).join('');
};

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});

}



console.log(createGalleryMarkup);
console.log(galleryItems);

console.log(galleryItems);
