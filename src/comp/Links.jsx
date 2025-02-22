import { motion } from 'motion/react';

export const Links = () => {
  return (
    <section className="grid place-content-center gap-2 px-8 lg:py-12 h-[92vh] lg:h-fit pt-8 text-center lg:text-left text-white/80">
      <FlipLink href="mailto:kbmh.mahi@gmail.com">EMAIL</FlipLink>
      <FlipLink href="tel:+8801575040200">PHONE</FlipLink>
      <FlipLink href="https://www.github.com/Khbmh">Github</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/Khbmh">Linkedin</FlipLink>
      <FlipLink href="https://wa.me/+8801575040200">WHATSAPP</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target='_blank'
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase mt-10 lg:mt-0 text-5xl lg:text-7xl mb-2"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
