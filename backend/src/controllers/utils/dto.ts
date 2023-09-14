import { ImageFile, ImageFileListFields } from '../../types/ImageFile';

export const getImageListFields = (image: ImageFile): ImageFileListFields => ({
  id: image.id,
  name: image.name,
});
