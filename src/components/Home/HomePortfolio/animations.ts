import gsap from 'gsap';
import { portfolioList } from '@constants/home/homeporfolio';

export const HomePortfolioSliderAnimaion = (trigger: HTMLDivElement, title: HTMLDivElement, container: HTMLDivElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: 'top top',
      end: '+=2000',
      scrub: 1,
      pin: true,
    },
  });

  tl.fromTo(
    title,
    {
      y: '100%',
      scale: '1.3',
    },
    {
      y: '0',
      scale: '1',
    },
  );

  tl.fromTo(
    container,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    '<15%',
  );

  const padding = (32 * portfolioList.length) / 4;
  const x = 45 + (padding * portfolioList.length) / 2;

  tl.to(container, {
    x: `-${x}vw`,
  });
};
