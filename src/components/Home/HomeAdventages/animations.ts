import { gsap } from 'gsap';

export const scrollingToAboutElemAnimation = (trigger: HTMLDivElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top top',
      end: '+=2500',
      scrub: 3,
      pin: true,
    },
  });

  const vh = document.documentElement.clientHeight;
  const vw = document.documentElement.clientWidth;

  tl.to(trigger, { duration: 4, scrollTo: { y: vh, x: vw }, ease: 'sine.out' });
  tl.to(trigger, { duration: 4, scrollTo: { y: vh * 2, x: 0 }, ease: 'sine.out' });
  tl.to(trigger, { duration: 4, scrollTo: { y: vh * 3, x: vw }, ease: 'sine.out' });
  tl.to(trigger, { duration: 4, scrollTo: { y: vh * 4, x: vw * 2 }, ease: 'sine.out' });
};
