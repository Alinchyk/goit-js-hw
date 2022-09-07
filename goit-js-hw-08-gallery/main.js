import gallery from "./gallery-items.js";
console.log(gallery);

const refs = {
  container: document.querySelector(".js-gallery"),
  jsLightbox: document.querySelector(".js-lightbox"),
  origImage: document.querySelector(".lightboximage"),
  button: document.querySelector(".lightboxbutton"),
  content: document.querySelector(".lightbox__content"),
};

function createGallery(images) {
  const galleryImg = images.reduce(
    (item, img) =>
      item +
      `<li class="gallery__item">
      <a class="gallery__link " href="#"><img class="gallery__image" src="${img.preview}" data-sours="${img.original}" alt="${img.description}" /></a>
    </li>`,
    "",
  );
  return refs.container.insertAdjacentHTML("afterbegin", galleryImg);
}
createGallery(gallery);
