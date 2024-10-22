import path from "path";
import { writeFile,mkdir } from "fs/promises";

const SaveImage = async (file: File, dirpath: string):Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
  const ext = path.extname(file.name);
  const filepath = path.join(process.cwd(), dirpath, `${filename}${ext}`)
  
  try {
    await mkdir(path.dirname(filepath), { recursive: true });
    await writeFile(filepath, buffer);
    return filepath
    console.log(`File saved successfully: ${filename}${ext}`);
  } catch (error) {
    console.error("Error saving file:", error);
    throw new Error(`Failed to save file: ${error}`); 
  }
};
export default SaveImage;