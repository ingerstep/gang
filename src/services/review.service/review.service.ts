import axios from 'axios';
import { ReviewDTO } from './types';

class RewviewService {
  async createReview(data: ReviewDTO) {
    try {
      await axios.post(
        `/strapi/api/reviews`,
        {
          data,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        },
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export const reviewService = new RewviewService();
