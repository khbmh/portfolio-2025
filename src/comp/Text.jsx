import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  useEffect(() => {
    // Select each span (each span wraps one character)
    const letters = document.querySelectorAll('.text p span');

    // Apply animation to each letter
    gsap.fromTo(
      letters,
      {
        opacity: 0.1, // Initial opacity for each letter
        y: 50, // Initial vertical position (for a nice entrance effect)
      },
      {
        opacity: 1, // Final opacity for each letter
        y: 0, // Final vertical position (bringing it back to the normal position)
        ease: 'none',
        stagger: 0.01, // Stagger animation for each letter
        scrollTrigger: {
          trigger: '.text p', // Trigger animation when the paragraph is in the viewport
          scrub: 1, // Synchronize the animation with scroll
          start: 'top 70%',
          end: 'bottom 80%',
        },
      },
    );
  }, []);

  // Text to be animated, split into individual characters
  const text = `I’m a junior MERN stack developer 💻 passionate about building sleek, responsive web applications. Focused on frontend excellence 🎨, I craft engaging user experiences while integrating seamless backend functionality ⚡. Always learning 📚, I stay updated with the latest tech to enhance performance and usability. Excited to tackle new challenges and contribute to innovative projects! 🚀`;

  // Split the text into individual letters wrapped in <span>
  const splitText = text
    .split('')
    .map((char, index) => <span key={index}>{char}</span>);

  return (
    <div id='about' className="flex flex-col">
      <div className="text flex justify-center items-center pt-[14vh] pb-[5vh] px-5 mx-auto text-white lg:w-[70vw] text-center">
        <p className="text-3xl md:text-5xl tracking-wide">
          {splitText}
        </p>
      </div>
    </div>
  );
};

export default Text;
