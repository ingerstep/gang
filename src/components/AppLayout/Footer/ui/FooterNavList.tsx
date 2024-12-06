import Link from 'next/link';
import styles from '../Footer.module.scss';
import { EColor, Typography } from '@ui/Typography';

export const FooterNavList = ({ list, title }: { list: { name: string; href: string }[]; title?: string }) => (
  <div className={styles.footer_col}>
    {title && (
      <Typography As="p" size={14} color={EColor.gray2} font="montserrat">
        {title}
      </Typography>
    )}
    <nav className={styles.footer_nav}>
      {list.map((item) => (
        <Link href={item.href}>
         <Typography As="p" size={14} color={EColor.white} font="montserrat">
            {item.name}
          </Typography>
        </Link>
      ))}
    </nav>
  </div>
);
