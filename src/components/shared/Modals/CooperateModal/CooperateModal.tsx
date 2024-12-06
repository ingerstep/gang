import { FeedBackForm } from '@components/shared/Forms/FeedBackForm';
import { form_3 } from '@constants/formTemplates/form_3';
import { Button, ButtonProps } from '@ui/Button';
import { Modal } from '@ui/Modal';
import { FC, useState } from 'react';
import styles from './CooperateModal.module.scss';
import { EColor, Typography } from '@ui/Typography';

export const CooperateModal: FC<ButtonProps> = ({ children, ...props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button {...props} onClick={showModal}>
        {children}
      </Button>
      <Modal visible={isModalVisible} close={closeModal}>
        <div className={styles.cooperate}>
          <div className={styles.cooperate_header}>
            <Typography As="h1" size={40} color={EColor.black} font="rostov">
              Отправить заявку на обратный звонок
            </Typography>
            <Button style={{ borderRadius: 8 }} typography={{ size: 20, color: EColor.black2 }} onClick={closeModal}>
              Закрыть
            </Button>
          </div>
          <div className={styles.cooperate_main}>
            <Typography As="p" size={16} font="montserrat" color={EColor.black}>
              Оставьте заявку на обратный звонок и в течение часа мы с вами свяжемся и ответим на все ваши вопросы
            </Typography>
            <FeedBackForm formTemplate={form_3} onClose={closeModal} />
          </div>
        </div>
      </Modal>
    </>
  );
};
