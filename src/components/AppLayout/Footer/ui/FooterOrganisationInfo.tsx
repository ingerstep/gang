import { Logo } from '@components/shared/Icons/Logo';
import styles from '../Footer.module.scss';
import { EColor, Typography } from '@ui/Typography';

export const FooterOrganisationInfo = () => (
  <div className={styles.footer_col}>
    <Logo />
    <div className={styles.footer_info}>
      <div>
        <Typography As="p" size={14} color={EColor.gray2} font="montserrat">
          ООО “ГЭНГ”
        </Typography>
        <Typography As="p" size={14} color={EColor.gray2} font="montserrat">
          ОГРН 1212400015783
        </Typography>
        <Typography As="p" size={14} color={EColor.gray2} font="montserrat">
          ИНН 2464156107
        </Typography>
      </div>
      <Typography As="p" size={14} color={EColor.gray2} font="montserrat">
        660078, Красноярский край, г Красноярск, пер Афонтовский, зд. 2, помещ. 75 (офис 611)
      </Typography>
    </div>
  </div>
);
