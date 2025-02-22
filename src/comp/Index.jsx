// 'use client';
import { ReactLenis } from 'lenis/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Education from './Education';
import Contacts from './Contacts';
import Text from './Text';
import Works from './works/Works';
export default function Index() {
  return (
    <ReactLenis root>
      <div className="wrapper">
        <Navbar />
        <Hero />
        <Text />
      </div>

      <Skills />

      <Education />
      <Works />
      <Contacts />
    </ReactLenis>
  );
}
