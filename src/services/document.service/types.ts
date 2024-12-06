import { HeaderMeta } from '@src/types';

export type DocumentDTO = {
  id: number;
  attributes: {
    id: number;
    title: string;
    slug: string;
    documentlist: {
      title?: string;
      description?: string;
      files?: {
        id: number;
        title: string;
        file: {
          data: {
            id: number;
            attributes: {
              url: string;
              ext: string;
              size: number;
            };
          };
        };
      }[];
    }[];
  };
};
