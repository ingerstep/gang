import styles from './styles.module.scss';

import cn from 'classnames';

export const Container = ({ children, padding = true }: { children: React.ReactNode; padding?: boolean }) => (
  <div className={cn(styles.container, { [styles.mobile]: !padding })}>{children}</div>
);
