import { ImageData } from '@src/types';
import { Tag } from '../article.service/types';

type Partner = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    url: string;
  };
};

export type VacancyDTO = {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    partner: {
      data: Partner;
    };
    image: ImageData;
    list: Tag[];
  };
};
