import { renderErrorMessage, unrenderErrorMessage } from "./errorMessage";
import { appendImageListItem } from "./list";
import { setPreviewImage } from "./preview";
import { postNewImage } from "../services/image";

const formContainer = document.querySelector<HTMLDivElement>('.form-container');
const imageForm = document.querySelector<HTMLFormElement>('.form');
const fileInput = document.querySelector<HTMLInputElement>('.file-input');

if (!imageForm || !fileInput || !formContainer) {
  throw new Error('ImageForm HTML elements not found')
}

imageForm.addEventListener('submit', async (event: SubmitEvent) => {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const response = await postNewImage(formData);

  if (!response.success) {
    renderErrorMessage(formContainer, response.message);
  } else {
    unrenderErrorMessage(formContainer);
  
    const createdImage = response.data;
    appendImageListItem(createdImage);
    setPreviewImage(createdImage.id);
  }

  fileInput.value = '';
});
