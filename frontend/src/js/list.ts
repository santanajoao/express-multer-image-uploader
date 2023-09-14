import { renderErrorMessage, unrenderErrorMessage } from "./errorMessage";
import { setPreviewImage } from "./preview";
import { getAllImages } from "../services/image";
import { ImageFileWithoutBuffer } from "../types/ImageFile";

const imageListElement = document
  .querySelector<HTMLUListElement>('.images-list');

const imageListMessage = document
  .querySelector<HTMLHeadingElement>('.images-list-container > .message');

const imageListContainer = document
  .querySelector<HTMLDivElement>('.images-list-container');

if (!imageListElement || !imageListMessage || !imageListContainer) {
  throw new Error('Images list HTML elements not found');
}

// functions

export const appendImageListItem = (image: ImageFileWithoutBuffer) => {
  unrenderErrorMessage(imageListContainer)

  imageListMessage.textContent = 'Suas imagens:';

  const listItem = document.createElement('li');

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('image-button');
  button.textContent = image.name;

  button.addEventListener('click', () => {
    setPreviewImage(image.id);
  });

  listItem.appendChild(button);
  
  imageListElement.appendChild(listItem);
}

const renderImageList = (imageList: ImageFileWithoutBuffer[]) => {
  if (imageList.length > 0) {
    imageListMessage.textContent = 'Suas imagens:';
    imageList.forEach(appendImageListItem);
  } else {
    imageListMessage.textContent = 'Lista de imagens vazia. Envie para visualizar.';
  }
}

export const fetchAllImages = async () => {
  const response = await getAllImages();
  
  if (!response.success) {
    renderErrorMessage(imageListContainer, response.message);
  } else {
    const imageList = response.data;
    renderImageList(imageList);
  }
};
