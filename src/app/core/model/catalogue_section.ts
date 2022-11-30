import { Image } from './image';

export type Catalogue_Section = {
  header?: { title: string; content?: string[] };
  images: Image[];
};
