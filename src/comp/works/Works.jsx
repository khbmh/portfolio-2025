// import { useState } from 'react';
// import Details from './Details';
// import { param } from 'motion/react-client';

import Details from '../projects/Details';

function Works() {
  // const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
        <div className="grid gap-[23vh] bg-slate-950/80 lg:order-first justify-center my-[20vh] items-center z-[33]">
          {projects.map((p) => (
            <div key={p.id} className="grid place-content-center">
              <div className="transition-all flex flex-col items-center justify-center bg-slate-900 duration-300 w-[90vw] max-w-[500px] h-auto lg:h-[70vh] align-bottom object-cover rounded-md p-4 border border-white/50">
                {/* <p className="text-sm text-gray-300">{p.image}</p> */}
                <img className="w-full rounded" src={p.image} alt={p.name} />
                <h2 className="text-xl font-semibold my-4">{p.name}</h2>
                <h3 className="mahi opacity-70">{p.details.description}</h3>
                <div className="mt-4 flex justify-center">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="px-6 mahi cursor-pointer py-2 rounded-full bg-gradient-to-r from-slate-700 to-pink-900"
                    onClick={() =>
                      document.getElementById(`my_modal_${p.id}`).showModal()
                    }
                  >
                    View Details
                  </button>
                  <dialog
                    id={`my_modal_${p.id}`}
                    className="modal min-h-screen flex flex-col justify-center gap-2 items-center py-2 bg-slate-950 modal-bottom sm:modal-middle"
                  >
                    <div
                      className={`container relative text-white mx-auto overflow-x-hidden max-h-[80vh] lg:max-w-[1200px] lg:w-[80vw]`}
                    >
                      <div className="flex flex-col items-center justify-center py-1">
                        <div className="flex flex-col lg:flex-row gap-4 px-4">
                          <img
                            className="max-w-[500px] w-[95vw] mx-auto rounded-md"
                            src={p?.image}
                            alt=""
                          />
                          <div className='lg:space-y-5'>
                            <h2 className="text-xl font-semibold">{p.name}</h2>
                            <h3 className="mahi opacity-70 leading-tight mb-4">
                              {p.details.description}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {p.details.techStack.map((skill, index) => (
                                <p
                                  key={index}
                                  className="text-sm bg-black px-2 py-1 rounded-full border border-white/60"
                                >
                                  {skill}
                                </p>
                              ))}
                            </div>
                            <div className="flex gap-4 my-4 *:px-4 *:py-1 *:bg-slate-800">
                              <a
                                href={p.details.liveProjectLink}
                                target="_blank"
                              >
                                Live Link
                              </a>
                              <a href={p.details.githubRepo} target="_blank">
                                Github
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex px-3 flex-col lg:flex-row gap-4 lg:mt-4 lg:w-full lg:justify-around">
                          <div>
                            <h3 className="text-2xl">Challenges Faced</h3>
                            {p.details.challengesFaced.map(
                              (challenge, index) => (
                                <p
                                  key={index}
                                  className="mahi text-xs lg:text-base"
                                >
                                  ~ {challenge}
                                </p>
                              ),
                            )}
                          </div>
                          <div>
                            <h3 className="text-2xl">Future Improvements</h3>
                            {p.details.futureImprovements.map(
                              (challenge, index) => (
                                <p
                                  key={index}
                                  className="mahi text-xs lg:text-base"
                                >
                                  ~ {challenge}
                                </p>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-action h-[10vh] lg:pt-10">
                      <form method="dialog">
                        <button className="px-6 mahi cursor-pointer py-2 rounded-full bg-gradient-to-r from-slate-700 to-pink-900">
                          Close
                        </button>
                      </form>
                    </div>
                  </dialog>

                  {/* <dialog
                    id={`my_modal_${p.id}`}
                    className="modal min-h-screen flex flex-col justify-center gap-2 items-center py-8 bg-slate-950 modal-bottom sm:modal-middle"
                  >
                    <div
                      className={`container relative bg-pink-600 text-white mx-auto overflow-y-scroll overflow-x-hidden`}
                    >
                      <div className="flex flex-col items-center justify-center gap-4 py-1">
                        <div className="flex flex-col lg:flex-row gap-4 px-4">
                          <img
                            className="max-w-[500px] w-[95vw] mx-auto rounded-md"
                            src={p?.image}
                            alt=""
                          />
                          <div>
                            <h2 className="text-xl font-semibold my-4">
                              {p.name}
                            </h2>
                            <h3 className="mahi opacity-70">
                              {p.details.description}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {p.details.techStack.map((skill, index) => (
                                <p
                                  key={index}
                                  className="text-sm bg-black px-2 py-1 rounded-full border border-white/60"
                                >
                                  {skill}
                                </p>
                              ))}
                            </div>
                            <div className="flex gap-4 my-4 *:px-4 *:py-1 *:bg-slate-800">
                              <a
                                href={p.details.liveProjectLink}
                                target="_blank"
                              >
                                Live Link
                              </a>
                              <a href={p.details.githubRepo} target="_blank">
                                Github
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex px-3 flex-col lg:flex-row gap-12">
                          <div>
                            <h3 className="text-2xl">Challenges Faced</h3>
                            {p.details.challengesFaced.map(
                              (challenge, index) => (
                                <p key={index} className="mahi">
                                  ~ {challenge}
                                </p>
                              ),
                            )}
                          </div>
                          <div>
                            <h3 className="text-2xl">Future Improvements</h3>
                            {p.details.futureImprovements.map(
                              (challenge, index) => (
                                <p key={index} className="mahi">
                                  ~ {challenge}
                                </p>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-action h-[10vh]">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                  {/* <button className="px-6 mahi cursor-pointer py-2 rounded-full bg-gradient-to-r from-slate-700 to-pink-900">
                          Close
                        </button>
                      </form>
                    </div>
                  </dialog> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
