import { DirectionDTO, DirectionMoreDTO } from './types';
import { DefaultDTO } from '@src/types';
import { request } from '@utils/request';
import axios from 'axios';

class DirectionService {
  async getAll() {
    try {
      const res = await request.get<DefaultDTO<DirectionDTO[]>>(`/api/directions?populate=*`);

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getBySlug(slug: string) {
    try {
      const res = await request.get<DefaultDTO<DirectionDTO[]>>(
        `/api/directions?populate=*&filters[category][slug]=${slug}`,
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getByDirectionSlug(slug: string) {
    try {
      const res = await request.get<DefaultDTO<DirectionMoreDTO[]>>(
        `/api/directions?filters[slug]=${slug}&populate=infinityline,cartlist.image,spakerlist,programs,formats,form.image,educations.image,educations.category,image,moreImage`,
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async search(debounceSearching: string) {
    try {
      const res = await axios.get<DefaultDTO<DirectionDTO[]>>(
        `/strapi/api/directions?populate=category&filters[title][$containsi]=${debounceSearching}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        },
      );

      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

export const directionService = new DirectionService();
