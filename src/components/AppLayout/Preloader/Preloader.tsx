import { Logo } from '@components/shared/Icons/Logo';
import styles from './Preloader.module.scss';

export const Preloader = () => (
  <div id="preloader" className={styles.preloader}>
    <Logo />
  </div>
);
