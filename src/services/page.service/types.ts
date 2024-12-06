import { Discount, Education, HeaderMeta, Partner, Teammate } from '@src/types';
import { Tag } from '../article.service/types';

export type ConsaltingDTO = {
  id: number;
  attributes: {
    HeaderMeta: HeaderMeta;
    Standarts: {
      id: number;
      title: string;
      description: string;
    }[];
  };
};

export type HomePageDTO = {
  id: number;
  attributes: {
    discount: Discount[];
    directions: {
      data: Education[];
    };
    partners: Partner[];
  };
};

export type AboutPageDTO = {
  id: number;
  attributes: {
    directions: {
      data: Education[];
    };
    teams: {
      data: Teammate[]
    }
  };
};

export type ContactPageDTO = {
  id: number;
  attributes: {
    teams: {
      data: Teammate[]
    }
  };
};

export type VacancyPageDTO = {
  id: number;
  attributes: {
    list: Tag[]
  };
};
