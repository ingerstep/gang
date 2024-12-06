import { EColor, Typography } from '@ui/Typography';
import styles from '../HamburgerMenu.module.scss';
import { Button } from '@ui/Button';
import { useContext } from 'react';
import { HeaderContext } from '@components/AppLayout/Header/context';
import Link from 'next/link';

type HamburgerMenuListProps = {
  data: { name: string; href: string }[];
  title?: string;
};

export const HamburgerMenuList = ({ title, data }: HamburgerMenuListProps) => {
  const { onClose } = useContext(HeaderContext);

  return (
    <div className={styles.list}>
      <Typography size={14} font="montserrat" color={EColor.gray2}>
        {title}
      </Typography>
      <div className={styles.list_buttons}>
        {data.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose}>
            <Button typography={{ size: 20, color: EColor.black2 }} style={{ borderRadius: 8 }}>
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
