import { renderErrorMessage, unrenderErrorMessage } from "./errorMessage";
import { getImageById } from "./services/image";
import { ImageFile } from "./types/ImageFile";

// elements

const previewContainer = document
  .querySelector<HTMLDivElement>('.preview-container');

const previewMessage = document
  .querySelector<HTMLHeadingElement>('.preview-container > .message');

if (!previewMessage || !previewContainer) {
  throw new Error('Image Preview HTML elements not found');
};

// functions

const renderPreviewImage = (image: ImageFile) => {
  let previewImage = document.querySelector<HTMLImageElement>('.preview-image');

  if (!previewImage) {
    previewImage = document.createElement('img');
    previewImage.classList.add('preview-image');
    previewContainer.appendChild(previewImage);
  }

  previewImage.setAttribute('alt', image.name);

  const imageUrl = `data:${image.mimetype};base64,${image.blobString}`;
  previewImage.setAttribute('src', imageUrl);
}

export const setPreviewImage = async (imageId: string) => {
  const response = await getImageById(imageId);
  
  if (!response.success) {
    renderErrorMessage(previewContainer, response.message);
  } else {
    unrenderErrorMessage(previewContainer);
  
    const image = response.data;
    previewMessage.textContent = image.name;
    renderPreviewImage(image);
  }
}