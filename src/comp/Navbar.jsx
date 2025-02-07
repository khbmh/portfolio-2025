import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contacts', id: 'contacts' },
];

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0].name);

  const handleClick = (id, name) => {
    setSelected(name);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="px-0 py-6 fixed top-0 w-full mx-auto left-0 right-0 z-50 backdrop-blur-xs justify-center flex items-center flex-wrap gap-1 lg:gap-4">
      {tabs.map(({ name, id }) => (
        <Chip
          text={name}
          id={id}
          selected={selected === name}
          setSelected={handleClick}
          key={id}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, id, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(id, text)}
      className={`${
        selected
          ? 'text-white'
          : 'text-slate-300 hover:text-slate-200 hover:bg-slate-700'
      } text-xs md:text-lg cursor-pointer transition-colors px-1 lg:px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default Navbar;
