export interface FileWithContent {
  filename: string;
  content: string;
}

export type PageLoad = () => Promise<PageData>;

export interface PageData {
  props: {
    mdFiles: FileWithContent[];
  };
}
