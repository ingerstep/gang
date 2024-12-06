import styles from './AdventageBlock/AdventageBlock.module.scss';
import line from '@assets/img/line.png';
import Image from 'next/image';

export const Empty = () => (
  <div className={styles.line_block}>
    <div>
      <div style={{transform: 'translateY(-20px)'}} className={styles.side_text}>12332123424323</div>
    </div>
    <div>
      <div style={{transform: 'translateY(-0px)'}} className={styles.side_text}>12332123424323</div>
    </div>
    <div>
      <div style={{transform: 'translateY(17px)'}} className={styles.side_text}>12332123424323</div>
    </div>
  </div>
);
