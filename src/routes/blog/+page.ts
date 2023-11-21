import type { Load } from "@sveltejs/kit";
import type { FileWithContent } from "./$types";

export const load: Load = async ({ fetch }) => {
  const response = await fetch("/api/blog");
  const mdFiles: FileWithContent[] = await response.json();
  
  return {
    props: {
      mdFiles: mdFiles,
    },
  };
};
