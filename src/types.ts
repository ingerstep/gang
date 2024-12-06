export interface DefaultDTO<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface ImageData {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

export interface HeaderMeta {
  title: string;
  metaDescription: string;
}

export interface Education {
  id: number;
  attributes: {
    title: string;
    slug: string;
    image: ImageData;
    category: {
      data: {
        id: number;
        attributes: {
          title: string;
          slug: string;
        };
      };
    };
  };
}

export interface Discount {
  id: number;
  title: string;
  description: string;
  image: ImageData;
}


export interface Partner {
  id: number;
  url: string;
  image: ImageData;
}


export interface Teammate {
  id: number;
  attributes: {
    title: string
    role: string
    description: string
    image: ImageData
  }
}
