'use client';

import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { EColor, Typography } from '@ui/Typography';
import { VKontakte } from '@components/shared/Icons/VKontakte';
import { CooperateModal } from '@components/shared/Modals/CooperateModal';
import { ContactMap } from './ui/ContactMap';

export const HomeContact = () => (
  <section>
    <Container>
      <Typography className={styles.title} As="h1" size={120} color={EColor.white} bold font="montserrat">
        Контакты
      </Typography>
    </Container>
    <div className={styles.contact}>
      <Container>
        <div className={styles.contact__inner}>
          <div className={`${styles.elem} ${styles.map}`}>
            <ContactMap />
          </div>
          <div className={styles.elem}>
            <div>
              <Typography As="h2" size={40} font="montserrat" color={EColor.white} bold>
                Красноярск
              </Typography>
              <Typography className={styles.contact_subtitle} As="h2" size={16} color={EColor.white} font="montserrat">
                У нас есть уютный офис, приходите, обсудим ваш проект или побеседуем в свободной форме
              </Typography>

              <div className={styles.contact__body}>
                <div className={styles.contact__item}>
                  <Typography As="h1" size={20} color={EColor.black} font="montserrat" bold>
                    Красноярск
                  </Typography>
                  <div className={styles.contact__item__bottom}>
                    <a href="https://2gis.ru/krasnoyarsk/firm/70000001037346580?m=92.8558%2C55.97631%2F18.49" target="_blank">
                      <Typography As="p" size={16} color={EColor.black} font="montserrat">
                        Афонтовский переулок, дом 2, офис 6-04
                      </Typography>
                    </a>
                  </div>
                </div>
                <div className={styles.contact__item}>
                  <Typography As="h1" size={20} color={EColor.black} font="montserrat" bold>
                    Почта
                  </Typography>
                  <div className={styles.contact__item__bottom}>
                    <a href="mailto:welcome@mygang.ru">
                      <Typography As="p" size={16} color={EColor.black} font="montserrat">
                        welcome@mygang.ru
                      </Typography>
                    </a>
                  </div>
                </div>
                <div className={styles.contact__item}>
                  <Typography As="h1" size={20} color={EColor.black} font="montserrat" bold>
                    Социальные сети
                  </Typography>
                  <div className={styles.contact__item__bottom}>
                    <a href="https://vk.com/gangagency" target="__blank">
                      <VKontakte />
                    </a>
                  </div>
                </div>
                <div className={styles.contact__item}>
                  <Typography As="h1" size={20} color={EColor.black} font="montserrat" bold>
                    Телефон
                  </Typography>
                  <div className={styles.contact__item__bottom}>
                    <a href="tel:+79994420526">
                      <Typography As="p" size={16} color={EColor.black} font="montserrat">
                        +7 (999) 442 05 26
                      </Typography>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <CooperateModal>Сотрудничать</CooperateModal>
          </div>
        </div>
      </Container>
    </div>
    <div className={styles.contact__bottom}></div>
  </section>
);
