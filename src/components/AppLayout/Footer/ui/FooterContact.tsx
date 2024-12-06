'use client';

import { EColor, Typography } from '@ui/Typography';
import styles from '../Footer.module.scss';
import { CooperateModal } from '@components/shared/Modals/CooperateModal';
import { VKontakte } from '@components/shared/Icons/VKontakte';

export const FooterContact = () => (
  <div className={styles.footer_col}>
    <Typography As="p" size={14} color={EColor.gray2} font="montserrat">
      Связаться
    </Typography>
    <div className={styles.footer_grid}>
      <div className={styles.footer_flex}>
        <a href="mailto:welcome@mygang.ru">
          <Typography As="p" size={14} color={EColor.white} font="montserrat">
            welcome@mygang.ru
          </Typography>
        </a>
        <a href="tel:+79994420526">
          <Typography As="p" size={14} color={EColor.white} font="montserrat">
            +7 (999) 442 05 26
          </Typography>
        </a>
      </div>
      <a href="https://vk.com/gangagency" target="_blank">
        <VKontakte type="white" />
      </a>
    </div>
    <CooperateModal mode="black" typography={{ size: 20 }}>
      Обсудить проект
    </CooperateModal>
    <a href="#">
      <Typography As="p" size={12} color={EColor.gray2} font="montserrat">
        Политика конфиденциальности
      </Typography>
    </a>

    <Typography As="p" size={12} color={EColor.gray2} font="montserrat">
      {new Date().getFullYear()} Ⓒ ООО «ГЭНГ»
    </Typography>
  </div>
);
