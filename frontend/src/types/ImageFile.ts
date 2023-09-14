export type ImageFile = {
  id: string;
  name: string;
  blobString: string;
  mimetype: string;
}

export type ImageFileWithoutBlob = Omit<ImageFile, 'blobArray'>;
