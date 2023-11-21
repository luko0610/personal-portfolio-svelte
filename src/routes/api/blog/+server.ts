const { getMdFiles } = await import("$lib/tools/getMdFiles");
const { readFileContent } = await import("$lib/tools/readFileContent");
import { json } from "@sveltejs/kit";

export async function GET(event: any) {
  let mdFiles = await getMdFiles();
  const mdFilesWithContent = await Promise.all(
    mdFiles.map(async (filename: string) => {
      const content = await readFileContent(`static/${filename}`);
      return { filename, content };
    })
  );

  return json(mdFilesWithContent);
}
