// 'use client';
import { ReactLenis } from 'lenis/react';
import Navbar from './Navbar';
import About from './About';
import Hero from './Hero';
import Skills from './Skills';
import Education from './Education';
export default function Index() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <Navbar />
          <Hero />

          <About />
        </div>

        <Skills />

        <Education />
        <section id="projects" className="text-white w-full bg-slate-950  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-8">
            <div className="sticky top-0 h-screen grid place-content-center lg:order-last">
              <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
                Copied & Paste Every Component you want and make an creative
                website 😎
              </h1>
            </div>
            <div className="grid gap-2 lg:order-first">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
          </div>
        </section>

        <footer id="contacts" className="min-h-screen w-full"></footer>
      </main>
    </ReactLenis>
  );
}
