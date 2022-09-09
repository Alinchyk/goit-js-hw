import gallery from "./gallery-items.js";

const refs = {
  container: document.querySelector(".js-gallery"),
  jsLightbox: document.querySelector(".js-lightbox"),
  origImage: document.querySelector(".lightboximage"),
  button: document.querySelector(".lightboxbutton"),
  content: document.querySelector(".lightbox__content"),
};

// створення галереї
function createGallery(images) {
  const galleryImg = images
    .map(({ original, description, preview }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}"
        ><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"
      /></a>
    </li>`;
    })
    .join("");
  return refs.container.insertAdjacentHTML("afterbegin", galleryImg);
}
createGallery(gallery);
