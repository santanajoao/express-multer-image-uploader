import { ImageFile, ImageFileCreation } from '../types/ImageFile';
import * as fileUtils from './utils/file';

const dataFilePath = 'src/data/files.json';

export const findAll = async (): Promise<ImageFile[]> => {
  return fileUtils.readJson(dataFilePath);
};

export const create = async (file: ImageFileCreation): Promise<ImageFile> => {
  const allImages = await findAll();
  
  const id = Date.now().toString();
  const createdFile: ImageFile = { id, ...file };

  allImages.push(createdFile);
  await fileUtils.writeJson(dataFilePath, allImages);
  return createdFile;
};

export const findById = async (id: string): Promise<ImageFile | null> => {
  const allImages = await findAll();

  const target = allImages.find((image) => image.id === id);

  return target ?? null;
};
