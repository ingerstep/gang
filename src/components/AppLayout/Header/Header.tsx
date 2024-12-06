'use client';

import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import { Logo } from '@components/shared/Icons/Logo';
import { HamburgerButton } from './ui/HamburgerButton';
import { HamburgerMenu } from './ui/HamburgerMenu';
import { HeaderContextProvider } from './context';

export const Header = () => {
  const [active, setActive] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const onOpen = () => {
    const tl = gsap.timeline();
    console.log(menuRef.current);

    tl.to(menuRef.current, 0.5, {
      x: '0%',
      ease: 'power3.out',
    });

    tl.to(
      overlayRef.current,
      0.5,
      {
        opacity: '1',
        pointerEvents: 'all',
        onStart: () => {
          document.body.style.overflow = 'hidden' as any;
          setActive(true);
        },

        ease: 'power3.out',
      },
      '<',
    );

    tl.play();
  };

  const onClose = () => {
    const tl = gsap.timeline();
    console.log(menuRef.current);
    tl.to(menuRef.current, 0.5, {
      x: '100%',
      ease: 'power3.out',
      onStart: () => {
        document.body.style.overflow = 'auto' as any;
        setActive(false);
      },
    });

    tl.to(
      overlayRef.current,
      0.5,
      {
        opacity: 0,
        pointerEvents: 'none',
        ease: 'power3.out',
      },
      '<',
    );

    tl.play();
  };

  return (
    <>
      <div onClick={active ? onClose : onOpen} ref={overlayRef} className={styles.overlay}></div>
      <div className={styles.hamburger}>
        <div className={styles.hamburger_inner}>
          <div>
            <a href="#home">
              <Logo />
            </a>
          </div>
          <HeaderContextProvider value={{ active, onClose, onOpen }}>
            <HamburgerButton active={active} onClick={active ? onClose : onOpen} />

            <HamburgerMenu ref={menuRef} />
          </HeaderContextProvider>
        </div>
      </div>
    </>
  );
};
