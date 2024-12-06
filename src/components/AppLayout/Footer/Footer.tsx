import React from 'react';
import styles from './Footer.module.scss';
import { Container } from '@ui/Container';
import { FooterOrganisationInfo } from './ui/FooterOrganisationInfo';
import { FooterNavList } from './ui/FooterNavList';
import { menu } from '@constants/menu';
import { services } from '@constants/services';
import { FooterContact } from './ui/FooterContact';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <FooterOrganisationInfo />
          <FooterNavList list={menu} />
          <FooterNavList title="Услуги" list={services} />
          <FooterContact />
          {/* <div className={styles.footer__logo}>
            <Logo type="desktop" />
          </div>
          <div className={styles.footer__inner}>
            <div className={styles.footer__row}>
              <Typography component="p" type="body" variant="big" color="gray3">
                ООО “Гэнг” ОГРН 1212400015783 ИНН 2464156107
              </Typography>
              <Typography component="p" type="body" variant="big" color="gray3">
                Политика конфиденциальности
              </Typography>
            </div>
            <div className={styles.footer__row}>
              <Typography component="p" type="body" variant="big" color="gray3">
                660078, Красноярский край, г Красноярск, пер Афонтовский, зд. 2, помещ. 75 (офис 611)
              </Typography>
              <Typography component="p" type="body" variant="big" color="gray3">
                2023 Ⓒ ООО Ⓒ «ГЭНГ»
              </Typography>
            </div>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};
