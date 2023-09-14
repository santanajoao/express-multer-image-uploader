const errorMessageClass = 'error-message';

const getErrorMessage = (container: HTMLElement) => {
  return container.querySelector<HTMLSpanElement>(`.${errorMessageClass}`);
}

export const renderErrorMessage = (container: HTMLElement, message: string) => {
  let errorElement = getErrorMessage(container);


  if (!errorElement) {
    errorElement = document.createElement('span');
    errorElement.classList.add(errorMessageClass);
  
    container.appendChild(errorElement);
  }

  if (errorElement && errorElement.textContent !== message) {
    errorElement.textContent = message;
  }
};

export const unrenderErrorMessage = (container: HTMLElement) => {
  const errorElement = getErrorMessage(container);
  if (errorElement) {
    container.removeChild(errorElement);
  };
};
