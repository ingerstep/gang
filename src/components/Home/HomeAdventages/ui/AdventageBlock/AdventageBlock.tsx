import { EColor, Typography } from '@ui/Typography';
import styles from './AdventageBlock.module.scss';
import line from '@assets/img/line.png';
import Image from 'next/image';
import { Button } from '@ui/Button';

type AdventageBlockProps = {
  count: string | number;
  title: string;
  subTitle: string;
  href?: string;
  maxWidth?: number;
};

export const AdventageBlock = ({ count, title, subTitle, href, maxWidth = 400 }: AdventageBlockProps) => (
  <div className={styles.line_block}>
    <div>
      <div className={styles.side_text}>12332123424323</div>
    </div>
    <div className={styles.line_block_flex}>
      <div>
        <div style={{ textAlign: 'right' }} className={styles.side_text}>
          1233
        </div>
      </div>
      <div className={styles.block}>
        <div className={`${styles.char} ${styles.gray}`}>{count}</div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexDirection: 'column',
          }}
        >
          <Typography As="h1" size={40} color={EColor.white} bold>
            {title}
          </Typography>
          <Typography As="p" size={16} color={EColor.white} style={{maxWidth: 400}}>
            {subTitle}
          </Typography>
          {href && (
            <Button style={{ pointerEvents: 'all' }} typography={{ size: 20 }} mode="black">
              Подробнее
            </Button>
          )}
        </div>
      </div>
      <div>
        <div className={styles.side_text}>1233</div>
      </div>
    </div>
    <div>
      <div className={styles.side_text}>12334622123423</div>
    </div>
  </div>
);
