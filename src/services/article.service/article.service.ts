import { ArticleDTO } from './types';
import { DefaultDTO } from '@src/types';
import { request } from '@utils/request';

const API_URL = process.env.API_URL;

class ArticleService {
  async getArticles() {
    try {
      const res = await request.get<DefaultDTO<ArticleDTO[]>>(
        `/api/articles?sort=publishedAt:desc&populate=previewImage,image,tags,`,
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getArticleSlug(slug: string) {
    try {
      const res = await request.get<DefaultDTO<ArticleDTO[]>>(
        `/api/articles?sort=publishedAt:desc&populate=teams.image,images.image,reviews&filters[slug]=${slug}`,
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

export const articleService = new ArticleService();
