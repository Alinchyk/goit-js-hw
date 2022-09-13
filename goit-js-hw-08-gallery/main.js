import imgGalery from "./gallery-items.js";

const refs = {
  list: document.querySelector(".js-gallery"),
  backdrop: document.querySelector(".js-lightbox"),
  overley: document.querySelector(".lightbox__overlay"),
  img: document.querySelector(".lightbox__image"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
};

// створення галереї
const createGalery = function (images) {
  return images
    .map(
      ({ original, description, preview }) => `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
        <img class ="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
            </a>
        </li>`,
    )
    .join("");
};
const listGalery = createGalery(imgGalery);
refs.list.innerHTML = listGalery;

// делегування
const onOpenModal = function (event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  refs.backdrop.classList.add("is-open"); // відкриття модального вікна
  refs.img.src = event.target.dataset.source; // підміна зображення
  refs.img.alt = event.target.alt;

  window.addEventListener("keydown", onEscKeyPress);
  window.addEventListener("keydown", onArrowLeftPress);
  window.addEventListener("keydown", onArrowRightPress);
};
refs.list.addEventListener("click", onOpenModal);

// закриття модального вікна кнопкою
const onCloseModal = function () {
  refs.backdrop.classList.remove("is-open");
  refs.img.src = ""; // Очистка значення атрибуту src елементу img.lightbox__image.
  refs.img.alt = "";
};
refs.btn.addEventListener("click", onCloseModal);

// Закриття модального вікна ESC.
const onEscKeyPress = function (event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
};

// Закриття модального вікна по клику на div.lightbox__overlay.
function onBOverlayClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}
refs.overley.addEventListener("click", onBOverlayClick);

// слайдер
const onArrowLeftPress = function (evt) {
  const ARR_LEFT_KEY_CODE = "ArrowLeft";
  const isArrLeftKey = evt.code === ARR_LEFT_KEY_CODE;

  if (isArrLeftKey) {
    const sources = imgGalery.map(({ original }) => original);
    let indexOfCurrentImg = sources.indexOf(img.src);

    if (indexOfCurrentImg === 0) {
      indexOfCurrentImg = sources.length;
    }
    refs.img.src = sources[indexOfCurrentImg - 1];
    console.log(indexOfCurrentImg);
  }
};

const onArrowRightPress = function (evt) {
  const ARR_RIGHT_KEY_CODE = "ArrowRight";
  const isArrRightKey = evt.code === ARR_RIGHT_KEY_CODE;

  if (isArrRightKey) {
    const sources = imgGalery.map(({ original }) => original);
    let indexOfCurrentImg = sources.indexOf(refs.img.src);

    if (indexOfCurrentImg + 1 > sources.length - 1) {
      indexOfCurrentImg = -1;
    }
    refs.img.src = sources[indexOfCurrentImg + 1];
    console.log(indexOfCurrentImg + 1);
  }
};
