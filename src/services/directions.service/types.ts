import { Education, ImageData } from '@src/types';
import { CategoryDTO } from '../category.service/types';
import { Tag } from '../article.service/types';

export type DirectionDTO = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    image: ImageData;
    category: {
      data: CategoryDTO;
    };
  };
};

export type CartAbout = {
  image: ImageData;
} & Tag;

export type DirectionMoreDTO = {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    image: ImageData;
    moreImage: ImageData;
    category: {
      data: CategoryDTO;
    };
    infinityline: Tag[];
    cartlist: CartAbout[];
    speakerdesc: string
    spakerlist: {
      id: number;
      title: string;
      description: string;
    }[];
    programs: {
      id: number;
      title: string;
      hours: string;
      fulltime: boolean;
      remotely: boolean;
      fulltimeremotely: boolean;
    }[];
    formats: {
      id: number;
      title: string;
      description: string;
    }[];
    form: {
      title: string;
      image: ImageData;
      description: string;
      formTitle: string;
      formDescription: string;
    };
    educations: {
      data: Education[];
    };
  };
};
