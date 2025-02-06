import { motion } from 'framer-motion';

const data = [
  {
    name: 'Frontend technologies',
    technologies: [
      {
        name: 'Tailwind CSS',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
      },

      {
        name: 'ReactJs',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      },
      {
        name: 'Next.js',
        img: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png',
      },
    ],
    photo:
      'https://i.pinimg.com/originals/c5/33/a5/c533a50f8877f9cfb4c31e4cd164b0a0.gif',
  },
  {
    name: 'Backend technologies',
    technologies: [
      {
        name: 'Node.js',
        img: 'https://images.seeklogo.com/logo-png/27/2/node-js-logo-png_seeklogo-273749.png',
      },
      {
        name: 'Express.js',
        img: 'https://img.icons8.com/color/512/express-js.png',
      },
      {
        name: 'MongoDB',
        img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png',
      },
    ],
    photo:
      'https://i.pinimg.com/originals/39/1c/8f/391c8f422c2983b48e06aa7f5111424f.gif',
  },
  {
    name: 'Tools',
    technologies: [
      {
        name: 'Git',
        img: 'https://img.icons8.com/color/200/git.png',
      },
      {
        name: 'Github',
        img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      },
      {
        name: 'VSCode',
        img: 'https://chris-ayers.com/assets/images/vscode-logo.png',
      },
    ],
    photo:
      'https://i.pinimg.com/originals/45/42/f6/4542f627a7ff752af4d8858eb17a5070.gif',
  },
];

export default function Cards() {
  return (
    <div style={container}>
      {data.map(({ name, photo, technologies }, i) => (
        <Card
          key={i}
          name={name}
          photo={photo}
          technologies={technologies} // Pass technologies as a prop
          index={i}
        />
      ))}
    </div>
  );
}

function Card({ name, photo, technologies, index }) {
  return (
    <motion.div
      className={`card-container-${index}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 1 }}
    >
      <div
        className="opacity-40"
        style={{
          ...splash,
          background: '#121',
          backgroundSize: 'contain',
        }}
      />
      <motion.div
        style={card}
        variants={cardVariants}
        className="card w-[70vw] lg:w-[25vw] -pt-[40px]  h-[50vh] lg:h-[70vh] bg-gradient-to-t from-slate-700 to-pink-900"
      >
        {/* Add the img element here */}
        <h1 className="font-semibold text-lg lg:text-2xl my-5" style={{ color: '#fff' }}>
          {name}
        </h1>

        {/* Map over technologies and render images */}
        {technologies.map((img, idx) => (
          <div key={idx} className="flex gap-4 my-3 justify-center items-center">
            <img
            className='w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]'
              src={img.img}
              alt={img.name} // Provide a meaningful and unique alt text
              style={{
                objectFit: 'contain',
              }}
            />
            <p className="opacity-60 text-sm lg:text-base">{img.name}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

/**
 * ==============   Styles   ================
 */

const container = {
  margin: '100px auto',
  maxWidth: 500,
  paddingBottom: 100,
  width: '100%',
};

const cardContainer = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingTop: 20,
  marginBottom: 20,
};

const splash = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  fontSize: 16,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  boxShadow:
    '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
  transformOrigin: '10% 60%',
  padding: '20px',
  color: '#fff',
};
