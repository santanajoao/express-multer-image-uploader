export type ImageFile = {
  id: string;
  name: string;
  bufferString: string;
  mimetype: string;
};

export type ImageFileCreation = Omit<ImageFile, 'id'>;

export type ImageFileListFields = Pick<ImageFile, 'id' | 'name'>;
