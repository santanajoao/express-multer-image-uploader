import { ImageFile, ImageFileCreation } from '../types/ImageFile';
import * as imageModel from '../models/image.model';
import HttpError from '../errors/HttpError';
import httpStatus from '../constants/httpStatus';

export const create = async (file: ImageFileCreation): Promise<ImageFile> => {
  if (!file.mimetype.includes('image/')) {
    throw new HttpError(
      httpStatus.UNPROCESSABLE_ENTITY,
      'Formato de arquivo inválido. Deve ser uma imagem',
    );
  }

  return imageModel.create(file);
};

export const getAll = async () => {
  return imageModel.findAll();
};

export const getById = async (id: string): Promise<ImageFile> => {
  const image = await imageModel.findById(id);

  if (!image) {
    throw new HttpError(
      httpStatus.NOT_FOUND, `Imagem com id ${id} não encontrada`,
    );
  }

  return image;
};
