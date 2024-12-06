import { CategoryDTO } from './types';
import { DefaultDTO } from '@src/types';
import { request } from '@utils/request';

class CategoryService {
  async getAll() {
    try {
      const res = await request.get<DefaultDTO<CategoryDTO[]>>(`/api/categories`);

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const categoryService = new CategoryService();
