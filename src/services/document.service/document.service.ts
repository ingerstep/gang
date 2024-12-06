import { DocumentDTO } from './types';
import { DefaultDTO } from '@src/types';
import { request } from '@utils/request';

class DocumentService {
  async getDocumentSidebar() {
    try {
      const res = await request.get<{ data: DefaultDTO<DocumentDTO[]> }>(
        `/api/documents?fields[0]=title&fields[1]=slug`,
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getDocumentBySlug(slug: string) {
    try {
      const res = await request.get<{ data: DefaultDTO<DocumentDTO> }>(
        `/api/documents?&filters[slug]=${slug}&populate=documentlist.files,documentlist.files.file`,
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

export const documentService = new DocumentService();
