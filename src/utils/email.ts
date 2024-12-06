import nodemailer from 'nodemailer';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  attachments?: { path: string }[];
};

const SMTPUSER = process.env.SMTPUSER || 'welcome@mygang.ru';

const smtpOptions = {
  host: process.env.SMTPHOST || 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: SMTPUSER,
    pass: process.env.SMTPPASS || 'gpyumuxajhfcbcxk',
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: `Гэнг <${SMTPUSER}>`,
    ...data,
  });
};
