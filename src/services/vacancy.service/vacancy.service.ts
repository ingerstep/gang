import { VacancyDTO } from './types';
import { DefaultDTO } from '@src/types';
import { request } from '@utils/request';

class VacancyService {
  async getToolbar() {
    try {
      const res = await request.get<DefaultDTO<VacancyDTO[]>>(`/api/partners`);

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAll() {
    try {
      const res = await request.get<DefaultDTO<VacancyDTO[]>>(`/api/vacancies?populate=partner,image,list`);

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
      const res = await request.get<DefaultDTO<VacancyDTO[]>>(
        `/api/vacancies?populate=partner,image,list&filters[partner][slug]=${slug}`,
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const vacancyService = new VacancyService();
