import { SendEmailData } from '@src/services/sendemail.service';
type Props = {
  subject: string;
} & SendEmailData;

export const FeedBackTMP = (data: Props) => `
    <div>
        <li>Имя - ${data.name},   ${data.type ? `${data.type}` : ''}</li>
        ${data.lastname ? `<li>Фамилия - ${data.lastname}</li>` : ''}
        <li>Телефон - ${data.phone}</li>
    </div>
`;
