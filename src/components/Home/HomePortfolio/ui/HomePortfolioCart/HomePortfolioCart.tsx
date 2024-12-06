'use client';

import React from 'react';
import styles from './HomePortfolioCart.module.scss';
import Image from 'next/image';
import cart from '@assets/img/home/portfolio/cart.png';
import { EColor, Typography } from '@ui/Typography';
import { Button } from '@ui/Button';

export const HomePortfolioCart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.bg}>
        <Image src={cart} alt="Туризм Красноярского края" />
      </div>

      <div className={styles.left}>
        <div>
          <div className={styles.collapse}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className={styles.tag}>
                <Typography As="p" size={12} color={EColor.black} font="montserrat">
                  Маркетинговая стратегия
                </Typography>
              </div>

              <div className={styles.tag}>
                <Typography As="p" size={12} color={EColor.black} font="montserrat">
                  Комплексное продвижение
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <Typography className={styles.title} As="h1" size={32} font="montserrat" color={EColor.white}>
          Туризм Красноярского края
        </Typography>
        <div className={styles.collapse}>
          <div className={styles.right__inner}>
            <Typography As="p" size={16} color={EColor.black} font="montserrat">
              Разработка и реализация маркетинговой стратегии, создание креативов и продвижение бренда в медиа поле
            </Typography>

            <Button typography={{ size: 20, color: EColor.black2 }} style={{ borderRadius: 8 }}>
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
