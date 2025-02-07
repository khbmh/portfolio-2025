import { useState } from 'react';
import Details from './Details';
import { param } from 'motion/react-client';

function Projects() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const projects = [
    {
      name: 'Lingo Bingo - Arabic Vocabulary Learning Platform',
      image: 'https://i.ibb.co.com/xSNG16RH/image.png',
      details: {
        techStack: [
          'React.js',
          'Tailwind CSS',
          'DaisyUI',
          'Animate.css',
          'React Hooks',
          'React Router DOM',
          'React CountUp',
          'React Scroll Trigger',
          'React Hot Toast',
          'React Icons',
          'Firebase',
        ],
        description:
          "Lingo Bingo is an interactive and user-friendly web application designed to help learners master Arabic vocabulary. Whether you're a beginner or an intermediate learner, this platform provides a structured and engaging way to expand your Arabic language skills.",
        liveProjectLink: 'https://lingo-bingo-khbmh.web.app/',
        githubRepo: 'https://github.com/khbmh/lingo-bingo',
        challengesFaced: [
          //  "Implementing real-time progress tracking for users.",
          'Ensuring smooth animations while maintaining performance.',
          'Managing state efficiently with React Hooks.',
        ],
        futureImprovements: [
          'Adding more vocabulary categories and interactive exercises.',
          'Integrating a spaced repetition system for better retention.',
          'Enhancing UI/UX with more animations and a dark mode option.',
        ],
      },
    },
    {
      name: 'Auvral - Historical Artifacts Tracker',
      image: 'https://i.ibb.co.com/67HVgBPg/Screenshot-2025-02-05-190703.png',
      details: {
        techStack: [
          'React.js',
          'React Router DOM',
          'Tailwind CSS',
          'Firebase',
          'Axios',
          'React Toastify',
          'SweetAlert',
          'Node.js',
          'Express.js',
          'MongoDB',
          'JWT',
        ],
        description:
          'Auvral is a web application designed to track and manage historical artifacts. Users can browse artifacts, view details, add new artifacts, like artifacts, and manage their own contributions. The application is fully responsive and includes user authentication, private routes, and CRUD operations.',
        liveProjectLink: 'https://auvral.web.app/',
        githubRepo: 'https://github.com/khbmh/auvral-client',
        challengesFaced: [
          'Implementing JWT authentication securely.',
          'Ensuring smooth CRUD operations with MongoDB.',
          'Managing complex state and API calls efficiently with Axios.',
        ],
        futureImprovements: [
          'Adding real-time artifact updates with WebSockets.',
          'Integrating AI-based image recognition for artifact identification.',
          'Enhancing UI/UX with dark mode and better animations.',
        ],
      },
    },
    {
      name: 'Newtova - A Product Hunting Website',
      image: 'https://i.ibb.co.com/GfsbSNcN/Screenshot-2025-02-05-190855.png',
      details: {
        techStack: [
          'React.js',
          'Tailwind CSS',
          'Daisy UI',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Firebase',
          'JWT',
          'Stripe',
          'React Router',
          'Axios',
          'React Tag Input',
        ],
        description:
          'Newtova is a platform where users can discover and share their tech products. This project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and includes features like user authentication, product submission, upvoting, reviews, and a payment system for premium features.',
        liveProjectLink: 'https://newtova.web.app/',
        githubRepo: 'https://github.com/khbmh/newtova-client',
        challengesFaced: [
          'Integrating payment functionality with Stripe.',
          'Ensuring a seamless experience for users with Google authentication.',
          'Handling complex user roles and permissions for dashboards.',
        ],
        futureImprovements: [
          'Expanding the product submission form to include more categories.',
          'Implementing a notification system for product updates.',
          'Adding AI-based product recommendations.',
        ],
      },
    },
  ];

  return (
    <section id="projects" className="text-white w-full bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-8">
        <div className="sticky top-0 h-screen flex items-center justify-center lg:order-last">
          <h1 className="2xl:text-5xl text-5xl px-8 font-bold text-center tracking-tight leading-[120%]">
            Showcasing My Best Works 😎 <br />
            Projects That <br /> Inspire{' '}
            <span className="hidden lg:inline">🌟</span> & Impress 💎
          </h1>
        </div>

        {/* Projects List */}
        <div className="grid gap-[23vh] lg:order-first justify-center my-[20vh] items-center z-[33]">
          {projects.map((p) => (
            <div key={p.url} className="grid place-content-center">
              <div className="transition-all flex flex-col items-center justify-center bg-slate-900 duration-300 w-[90vw] max-w-[500px] h-auto lg:h-[70vh] align-bottom object-cover rounded-md p-4 border border-white/50">
                {/* <p className="text-sm text-gray-300">{p.image}</p> */}
                <img className="w-full rounded" src={p.image} alt={p.name} />
                <h2 className="text-xl font-semibold my-4">{p.name}</h2>
                <h3 className="mahi opacity-70">{p.details.description}</h3>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setIsDetailsOpen(true)}
                    className="px-6 mahi cursor-pointer py-2 rounded-full bg-gradient-to-r from-slate-700 to-pink-900"
                  >
                    View Details
                  </button>
                  {/* Details Modal */}
                  <div className="z-[999999]">
                    {isDetailsOpen && (
                      <Details
                        data={p}
                        isDetailsOpen={isDetailsOpen}
                        setIsDetailsOpen={setIsDetailsOpen}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

/*
import { useState } from 'react';
import Details from './Details';

function Projects() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const projects = [
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/project1.jpg',
      url: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/images/project2.jpg',
      url: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '/images/project3.jpg',
      url: 'https://example.com/project3',
    },
    {
      title: 'Project 4',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/project4.jpg',
      url: 'https://example.com/project4',
    },
  ];

  return (
    <section id="projects" className="text-white w-full bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-8">
        <div className="sticky top-0 h-screen grid place-content-center lg:order-last">
          <h1 className="2xl:text-5xl text-5xl px-8 font-bold text-center tracking-tight leading-[120%]">
            Technologies & Tools ✨ <br /> That Empowers Me ⚡
          </h1>
        </div>
        <div className="grid gap-2 lg:order-first justify-center items-center">
          {projects.map((p) => (
            <div
              key={p.url}
              className="sticky top-0 h-screen grid place-content-center"
            >
              <div className="transition-all bg-slate-900 duration-300 w-[90vw] max-w-[500px] h-[65vh] lg:h-[70vh] align-bottom object-cover rounded-md p-4 border border-white/50">
                <p>{p.title}</p>
                <p>{p.description}</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
*/
