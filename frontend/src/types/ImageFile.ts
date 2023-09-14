export type ImageFile = {
  id: string;
  name: string;
  bufferString: string;
  mimetype: string;
}

export type ImageFileWithoutBuffer = Omit<ImageFile, 'bufferString'>;
