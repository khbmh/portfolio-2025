import { motion } from 'motion/react';

function Education() {
  return (
    <section
      id="education"
      className="h-screen py-[15vh] w-full bg-slate-950 flex justify-center items-center relative"
    >
      <motion.div
        className="text-left text-white px-6 flex flex-col lg:flex-row justify-center items-center gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportLeave={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, margin: '-100px 0px 0px 0px' }}
      >
        <motion.div
          className="lg:max-w-[1080px] mx-auto"
          initial={{ x: '-50%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          onViewportLeave={{ x: '-50%', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 12,
            duration: 0.8,
          }}
          viewport={{ once: false, margin: '0px 0px 0px 0px' }}
        >
          {/* <h2 className="text-4xl font-bold mb-4">Education</h2> */}
          <h1 className="text-2xl font-semibold mb-2">Currently studying</h1>
          <a
            href="https://cu.ac.bd/mgt/"
            target="_blank"
            className="2xl:text-4xl text-3xl font-semibold bg-gradient-to-r from-slate-700 to-pink-900 text-transparent bg-clip-text text-center tracking-wide leading-[120%]"
          >
            BBA in Management
          </a>
          <p className="text-lg">University of Chittagong,</p>
          <p className="text-lg mt-1">3rd Semester (Started in Oct 2023)</p>
          <p className="text-lg mt-1">Expected completion: 2027</p>
        </motion.div>

        <motion.img
          className="lg:max-w-[600px] lg:h-[60vh] w-full h-[40vh] bg-cover bg-center rounded-lg object-cover overflow-hidden"
          src="https://www.edufever.com/wp-content/uploads/2021/10/Chittagong-University.webp"
          initial={{ scale: 0.8, opacity: 0, blur: '100px' }}
          whileInView={{ scale: 1, opacity: 1, blur: '0px' }}
          onViewportLeave={{ scale: 0.8, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 12,
            delay: 0.2,
          }}
          viewport={{ once: false }}
        />
      </motion.div>
    </section>
  );
}

export default Education;
