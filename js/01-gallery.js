import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryPalette = document.querySelector(".gallery");

galleryPalette.addEventListener("click", selectFoto);

createPaletteGallery();

function selectFoto(event) {
  const origImg = event.target.dataset.source;
  console.log(event.target.nodeName);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(origImg);
  
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${origImg}" width="800" height="600">
`,
  {
            onShow: () => {
                galleryPalette.addEventListener(`keydown`, onEscapePress), document.body.classList.add('no-scroll')
            },
            onClose: () => {
                galleryPalette.removeEventListener(`keydown`, onEscapePress), document.body.classList.remove('no-scroll')
            },
        });
  
  instance.show()
      function onEscapePress(event) {
        if (event.code === "Escape") {
            instance.close()
        }
    }
}





function createPaletteGallery() {
    const element = galleryItems
 // .map((ingredient) => `<img class="gallery__image" src="${ingredient.preview}" alt="${ingredient.description}"></li>`)
.map((ingredient) => ` <div class="gallery__item">
  <a class="gallery__link" href="${ingredient.original}">
    <img
      class="gallery__image"
      src="${ingredient.preview}"
      data-source="${ingredient.original}"
      alt="${ingredient.description}"
    />
  </a>
</div>`)
  .join("");
    galleryPalette.insertAdjacentHTML("beforeend", element);
}