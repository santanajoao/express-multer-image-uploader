import * as imageService from '../services/image.service';
import { Request, Response } from 'express';
import HttpError from '../errors/HttpError';
import httpStatus from '../constants/httpStatus';
import { getImageListFields } from './utils/dto';

export const getAllImages = async (_req: Request, res: Response) => {
  const imageList = await imageService.getAll();
  const imageListFieldsList = imageList.map(getImageListFields);
  return res.status(httpStatus.OK).json(imageListFieldsList);
};

export const getImageById = async (req: Request, res: Response) => {
  const image = await imageService.getById(req.params.id);
  return res.status(httpStatus.OK).json(image);
};

export const postImage = async (req: Request, res: Response) => {
  if (!req.file) {
    throw new HttpError(httpStatus.NOT_FOUND, 'File not found');
  }

  const createdImage = await imageService.create({
    name: req.file.originalname,
    bufferString: req.file.buffer.toString('base64'),
    mimetype: req.file.mimetype,
  });

  const createdImageListFields = getImageListFields(createdImage);

  return res.status(httpStatus.CREATED).json(createdImageListFields);
};
