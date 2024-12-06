'use client';

import dynamic from 'next/dynamic';
import { HomeIntro } from '@components/Home/HomeIntro';
const HomeAdventages = dynamic(() => import('@components/Home/HomeAdventages').then((module) => module.HomeAdventages));
const HomeContact = dynamic(() => import('@components/Home/HomeContact').then((module) => module.HomeContact));
const HomePortfolio = dynamic(() => import('@components/Home/HomePortfolio').then((module) => module.HomePortfolio));

export default function Home() {
  return (
    <>
      <HomeIntro />
      <HomePortfolio />
      <HomeAdventages />
      <HomeContact />
    </>
  );
}
