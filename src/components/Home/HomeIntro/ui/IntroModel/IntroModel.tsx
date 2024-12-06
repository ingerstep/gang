import { Canvas } from '@react-three/fiber';
import styles from './IntroModel.module.scss';
import { Suspense } from 'react';
import { HomeModel } from '@components/Home/ui/HomeModel';

export const IntroModel = () => (
  <div className={styles.model__wrapper}>
    <div className={styles.model}>
      <Canvas style={{ width: '100%', height: '120%' }} className={styles.canvas}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 10, 10]} />
        <Suspense fallback={null}>
          <HomeModel />
        </Suspense>
      </Canvas>
    </div>
  </div>
);
