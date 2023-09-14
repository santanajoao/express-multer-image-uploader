import fs from 'fs/promises';

export const readFile = async (path: string): Promise<string> => {
  return fs.readFile(path, 'utf-8');
};

export const writeFile = async (path: string, data: any): Promise<void> => {
  await fs.writeFile(path, data);
};

export const readJson = async (path: string): Promise<any> => {
  const jsonContent = await readFile(path);
  return JSON.parse(jsonContent);
};

export const writeJson = async (path: string, javascriptData: any) => {
  const jsonData = JSON.stringify(javascriptData);
  await writeFile(path, jsonData);
};
