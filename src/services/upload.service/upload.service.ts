import axios from 'axios';

class UploadService {
  async upload(files: FormData) {
    try {
      const res = await axios.post<{ url: string; id: number }[]>(`/strapi/api/upload`, files, {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      });

      const { data } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async destroy(id: number) {
    try {
      await axios.delete(`/strapi/api/upload/files/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export const uploadService = new UploadService();
