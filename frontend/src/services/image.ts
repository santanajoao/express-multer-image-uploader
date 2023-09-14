import { ImageFile, ImageFileWithoutBuffer } from '../types/ImageFile';
import { treatedFetch } from '../utils/fetch';

export const endpoint = 'http://localhost:3001/images';

export const getAllImages = async () => {
  const response = await treatedFetch<ImageFileWithoutBuffer[]>(endpoint);
  return response;
};

export const getImageById = async (id: string) => {
  const response = await treatedFetch<ImageFile>(`${endpoint}/${id}`);
  return response;
};

export const postNewImage = async (data: FormData) => {
  const response = await treatedFetch<ImageFile>(endpoint, {
    method: 'POST',
    body: data,
  });

  return response;
};
