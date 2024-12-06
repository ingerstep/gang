import { Teammate, ImageData } from '@src/types';

export type Tag = {
  id: number;
  title: string;
};

export type SliderImage = {
  id: number;
  video?: string;
  image: ImageData;
};

export type Review = {
  id: number;
  attributes: {
    title: string;
    phone: string;
    description: string;
    role: string;
    company: string;
    publishedAt: string;
  };
};

export type ArticleDTO = {
  id: number;
  attributes: {
    title: string;
    preview: string;
    previewImage: ImageData;
    description: string;
    type: 'Будущая' | 'Прошедшая';
    slug: string;
    publishedAt: string;
    teams: {
      data?: Teammate[];
    };
    reviews: {
      data?: Review[];
    };
    tags: Tag[];
    images: SliderImage[];
  };
};
