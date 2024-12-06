import { FormTempate } from "./form_1";

export const form_2 = {
    tmp: [
      {
        name: 'descirption',
        placeholder: 'Сопроводительное письмо',
      },
      {
        name: 'name',
        placeholder: 'Ваше имя?',
      },
      {
        name: 'phone',
        placeholder: '+7 (999) 999-99-99',
      },
    ],
    options: {
      subject: 'Запись на консультацию',
      btn: 'Отправить форму',
    },
  } as FormTempate;
  