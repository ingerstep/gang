import { Form } from '@components/shared/Form';
import { FormTempate } from '@constants/formTemplates/form_1';
import { SendEmailData, sendEmailService } from '@src/services/sendemail.service';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { InputCheckbox } from '@ui/InputCheckbox';

import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

const rules = {
  required: true,
};

export const FeedBackForm = ({ formTemplate, onClose }: { formTemplate: FormTempate, onClose: () => void }) => {
  if (!formTemplate) {
    return;
  }

  const { tmp, options } = formTemplate;

  const onSubmit = async (data: SendEmailData) => {
    await sendEmailService.send(data, options.subject);
    onClose()
  };

  return (
    <Form<any> onSubmit={onSubmit} className="grid">
      {({ control, formState: { errors } }) => (
        <>
          <Controller
            control={control}
            name="name"
            rules={rules}
            render={({ field }) => (
              <Input error={errors[tmp[0].name] as any} placeholder={tmp[0].placeholder} {...field} />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <InputMask mask="+7 (999) 999 99-99" maskChar="" value={field.value} onChange={field.onChange}>
                {/* @ts-ignore */}
                {(inputProps) => (
                  <Input error={errors[tmp[1].name] as any} placeholder={tmp[1].placeholder} {...inputProps} />
                )}
              </InputMask>
            )}
            rules={{
              required: {
                value: true,
                message: "Поле 'Телефон' обязателен для заполнения",
              },
              minLength: {
                value: 18,
                message: 'Некорректное заполнение',
              },
            }}
          />
          <Controller
            control={control}
            name="agreement"
            rules={rules}
            render={({ field }) => (
              <InputCheckbox
                error={errors['agreement']}
                text="Согласен с условиями Политики конфиденциальности"
                {...field}
              />
            )}
          />
          <div>
            <Button typography={{size: 20}} style={{borderRadius: 8}}>{options.btn}</Button>
          </div>
        </>
      )}
    </Form>
  );
};
