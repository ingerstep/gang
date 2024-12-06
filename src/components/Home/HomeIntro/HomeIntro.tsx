'use client';

import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { EColor, Typography } from '@ui/Typography';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CooperateModal } from '@components/shared/Modals/CooperateModal';
import dynamic from 'next/dynamic';
import { homeIntroAnimation } from './animations';

const IntroModel = dynamic(() => import('./ui/IntroModel').then((module) => module.IntroModel), {
  ssr: false,
});

const HomeIntroOverlay = dynamic(() => import('./ui/HomeIntroOverlay').then((module) => module.HomeIntroOverlay));

export const HomeIntro = () => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const titleContainer = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const titleTopRef = useRef<HTMLDivElement | null>(null);
  const titleBottomRef = useRef<HTMLDivElement | null>(null);
  const textCollapseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!triggerRef.current || !titleTopRef.current || !titleBottomRef.current || !titleContainer.current || !titleRef.current || !textCollapseRef.current) {
        return;
      }

      homeIntroAnimation(triggerRef.current, titleTopRef.current, titleBottomRef.current, titleContainer.current, titleRef.current, textCollapseRef.current);
    });

    return () => context.revert();
  }, []);

  return (
    <div id="home" ref={triggerRef}>
      <Container>
        <div className={styles.intro}>
          <IntroModel />
          <div className={styles.title__wrapper} ref={titleContainer}>
            <div className={styles.title__container}>
              <Typography refer={titleTopRef} className={styles.intro__text} As="span" size={80} font="montserrat" color={EColor.gray}>
                digital
              </Typography>
              <Typography refer={titleRef} className={styles.intro__title} As="h1" size={120} font="rostov" color={EColor.white}>
                GANG
              </Typography>
              <Typography refer={titleBottomRef} className={styles.intro__text1} As="span" size={80} font="montserrat" color={EColor.gray}>
                agency
              </Typography>
            </div>
            <Typography className={styles.intro__subtitle} As="h1" size={40} font="montserrat" color={EColor.white}>
              Ваш удаленный
              <br />
              отдел маркетинга
            </Typography>

            <div ref={textCollapseRef} className="collapse">
              <Typography className={styles.intro__desc} As="p" size={16} font="montserrat" color={EColor.white}>
                Разрабатываем маркетинговые стратегии с современным подходом, веб-разработка с уникальным дизайном, продуманным интерфейсом и удобной для
                пользователя структурой
              </Typography>
            </div>

            <div style={{ maxWidth: '320px' }}>
              <CooperateModal>Сотрудничать</CooperateModal>
            </div>
          </div>
        </div>
      </Container>

      <HomeIntroOverlay />
    </div>
  );
};
