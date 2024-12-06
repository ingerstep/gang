import { DetailedHTMLProps, HTMLAttributes, ForwardedRef, forwardRef, useContext } from 'react';
import styles from './HamburgerMenu.module.scss';
import { EColor, Typography } from '@ui/Typography';
import { HamburgerMenuList } from './ui/HamburgerMenuList';
import { menu } from '@constants/menu';
import { services } from '@constants/services';
import { VKontakte } from '@components/shared/Icons/VKontakte';
import { CooperateModal } from '@components/shared/Modals/CooperateModal';
import { HeaderContext } from '../../context';

type HamburgerMenuProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const HamburgerMenu = forwardRef<HTMLDivElement, HamburgerMenuProps>((props, ref) => {
  const { onClose } = useContext(HeaderContext);

  return (
    <div className={styles.menu} {...props} ref={ref}>
      <Typography size={120} color={EColor.gray3} font="rostov" uppercase>
        Gang
      </Typography>
      <div>
        <HamburgerMenuList data={[menu[0]]} />
        <HamburgerMenuList title="GANG" data={menu.filter((_, i) => i !== 0)} />
        <HamburgerMenuList title="Услуги" data={services} />
        <div className={styles.list} style={{ border: 'none' }}>
          <Typography size={14} font="montserrat" color={EColor.gray2}>
            Связаться
          </Typography>

          <div className={styles.list_inner} onClick={onClose}>
            <CooperateModal typography={{ size: 20, color: EColor.black2 }} style={{ borderRadius: 8 }}>
              Обсудить проект
            </CooperateModal>

            <div className={styles.list_contacts_inner}>
              <a href="mailto:welcome@mygang.ru">
                <Typography size={16} font="montserrat" color={EColor.gray2}>
                  welcome@mygang.ru
                </Typography>
              </a>
              <a href="tel:+79994420526">
                <Typography size={16} font="montserrat" color={EColor.gray2}>
                  +7 (999) 442 32 05
                </Typography>
              </a>
            </div>

            <div className={styles.list_contacts}>
              <a href="https://vk.com/gangagency" target="_blank">
                <VKontakte width="40px" height="40px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
