export async function getMdFiles() {
  const files = import.meta.glob("/static/blogentries/*.md");

  // Extract filenames from the glob import
  const mdFiles = Object.keys(files).map((file) =>
    file.replace("/static/", "")
  );

  return mdFiles as string[];
}
