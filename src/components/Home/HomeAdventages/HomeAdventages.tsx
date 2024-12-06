'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import styles from './HomeAdventages.module.scss';
import { EColor, Typography } from '@ui/Typography';
import { gsap } from 'gsap';
import { Container } from '@ui/Container';
import { scrollingToAboutElemAnimation } from './animations';

const AdventageBlock = dynamic(() => import('./ui/AdventageBlock').then((module) => module.AdventageBlock));
const Empty = dynamic(() => import('./ui/Empty').then((module) => module.Empty), { ssr: false });

export const HomeAdventages = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!triggerRef.current) return;
      scrollingToAboutElemAnimation(triggerRef.current);
    });

    return () => context.revert();
  }, []);

  return (
    <div>
      <Container>
        <Typography As="h1" size={120} color={EColor.white} font="montserrat" bold>
          О нас
        </Typography>
      </Container>
      <div id="about" ref={triggerRef} className={styles.homeadventages}>
        <div className={styles.overlay}>
          <div className={styles.overlay__shadow}></div>
        </div>
        <div className={styles.zone}>
          <AdventageBlock
            count="99%"
            title="Проектов"
            subTitle="Работают с нами по рекомендации. Рекомендации - это результат усилий и преданности качеству, которые мы вкладываем в каждый проект"
          />
          <Empty />
          <Empty />
          <Empty />
          <AdventageBlock
            count={6}
            title="Лет"
            subTitle="Наш опыт позволяет точно понять потребности и требования каждого клиента, чтобы предложить самые действенные и индивидуальные инструменты."
          />
          <Empty />
          <AdventageBlock
            count={26}
            title="Сертификатов"
            subTitle="Профессиональные сертификаты наших специалистов подтверждают их квалификацию и опыт в области маркетинга"
          />
          <Empty />
          <Empty />
          <Empty />
          <AdventageBlock count={2} title="Года" subTitle="Средний срок работы с клиентом, выстраиваем долгосрочные и доверительные отношения." />
          <Empty />
          <Empty />
          <Empty />
          <AdventageBlock
            count="150+"
            title="Реализованных проектов"
            subTitle="Это число успешно завершенных проектов, над которыми работала компания"
            href="#"
          />
        </div>
      </div>
    </div>
  );
};
