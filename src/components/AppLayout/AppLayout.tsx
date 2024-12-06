'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const elem = document.querySelector('#preloader') as HTMLDivElement;
    elem.style.opacity = '0';

    setTimeout(() => (document.body.style.overflow = 'auto'));

    document.querySelectorAll('a[href*="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        const scrollToHere = link.getAttribute('href') as string;

        gsap.to(window, { duration: 4, scrollTo: scrollToHere });
      });
    });
  }, []);

  return children;
};
