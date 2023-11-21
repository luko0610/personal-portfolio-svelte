import { promises as fsPromises } from 'fs';

export async function readFileContent(filePath: string): Promise<string> {
  try {
    const content = await fsPromises.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
    return '';
  }
}