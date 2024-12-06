import axios from 'axios';

export type SendEmailData = {
  file?: string
  name: string;
  phone: string;
  agreement: boolean | any;
  descirption?: string;
  email?: string;
  lastname?: string;
  type?: string;
  user?: string
};

class SendEmail {
  send(data: SendEmailData, subject: string) {
    axios.post('/api/send-email', { subject, ...data });
  }
  
}

export const sendEmailService = new SendEmail();
