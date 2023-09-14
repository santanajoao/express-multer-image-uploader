export type ImageFileCreation = {
  name: string;
  blobString: string;
  mimetype: string;
}

export type ImageFile = { id: string } & ImageFileCreation;
