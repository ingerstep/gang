'use client';

import { Container } from '@ui/Container';
import { EColor, Typography } from '@ui/Typography';
import React, { useEffect, useRef } from 'react';
import styles from './HomePortfolio.module.scss';
import { HomePortfolioCart } from './ui/HomePortfolioCart';
import gsap from 'gsap';
import { portfolioList } from '@constants/home/homeporfolio';
import { HomePortfolioSliderAnimaion } from './animations';

export const HomePortfolio = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!triggerRef.current || !titleRef.current || !portfolioRef.current) {
        return;
      }

      HomePortfolioSliderAnimaion(triggerRef.current, titleRef.current, portfolioRef.current);
    });

    return () => context.revert();
  }, []);

  return (
    <section ref={triggerRef} id="portfolio">
      <div className={styles.portfolio}>
        <Container>
          <Typography refer={titleRef} className={styles.title} As="h1" size={120} color={EColor.white} font="montserrat" bold>
            Наши работы
          </Typography>
        </Container>

        <div style={{ position: 'relative' }}>
          <div ref={portfolioRef}>
            <div className={styles.portfolio_inner}>
              {portfolioList.map((item) => (
                <HomePortfolioCart />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
