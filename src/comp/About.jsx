import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { useState, useRef } from 'react';

function About() {
  const text =
    'I’m a junior MERN stack developer 💻 passionate about building sleek, responsive web applications. Focused on frontend excellence 🎨, I craft engaging user experiences while integrating seamless backend functionality ⚡. Always learning 📚, I stay updated with the latest tech to enhance performance and usability. Excited to tackle new challenges and contribute to innovative projects! 🚀';

  const letters = Array.from(text);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['40% end', '1% start'],
  });

  const [allowScroll, setAllowScroll] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 1) {
      setAllowScroll(true);
    }
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className={`relative text-white h-screen w-full bg-slate-950 flex items-center justify-center ${
        allowScroll ? '' : 'sticky top-0'
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <p className="2xl:text-4xl text-xl max-w-[1000px] px-8 text-center tracking-wide leading-[140%]">
        {letters.map((letter, index) => {
          const opacity = useTransform(
            scrollYProgress,
            [
              (index / letters.length) * 0.8,
              ((index + 1) / letters.length) * 1.2,
            ],
            [0, 1],
          );
          return (
            <motion.span key={index} style={{ opacity }}>
              {letter}
            </motion.span>
          );
        })}
      </p>
    </section>
  );
}

export default About;
