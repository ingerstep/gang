export type FormTempate = {
  tmp: {
    name: string;
    placeholder: string;
  }[];
  options: {
    subject: string;
    btn: string;
  };
};

export const form_1 = {
  tmp: [
    {
      name: 'descirption',
      placeholder: 'Опишите свой кейс или проблему бизнеса',
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
    subject: 'Бизнес-кейс',
    btn: 'Заказать звонок',
  },
} as FormTempate;