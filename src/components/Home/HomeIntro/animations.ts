import { gsap } from 'gsap';
import { getHeightChildren } from '@utils/getHeightChildren';

export const homeIntroAnimation = (
  trigger: HTMLDivElement,
  titlTop: HTMLDivElement,
  titleBottom: HTMLDivElement,
  titleContainer: HTMLDivElement,
  title: HTMLDivElement,
  collapse: HTMLDivElement,
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: '1 top',
      end: '+=300',
      scrub: 1,
      pin: true,
      onEnter: () => {
        gsap.to(window, 1, {
          scrollTo: { y: 299 },
        });
      },
    },
  });

  tl.to('#overlay', {
    background: '#101010',
  });

  tl.to(
    titlTop,
    {
      x: '50%',
      opacity: 0,
    },
    '<',
  );

  tl.to(
    titleBottom,
    {
      x: '-50%',
      opacity: 0,
    },
    '<',
  );

  tl.to(
    titleContainer,
    {
      left: `-50%`,
    },
    '<',
  );

  tl.to(
    title,
    {
      color: '#C83540',
      fontSize: '200px',
    },
    '<',
  );

  tl.to(collapse, {
    height: getHeightChildren(collapse as HTMLDivElement),
    duration: 0.2,
  });

  tl.to(
    '#overlay_content',
    {
      opacity: 1,
    },
    '<',
  );
};
