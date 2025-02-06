import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Hero() {
  return (
    <section
      id="home"
      className="text-white h-screen w-full bg-slate-950 grid place-content-center relative top-0"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative">
          <img
            className="w-[150px] h-[150px] rounded-full hover:grayscale-0 hover:blur-[1px] blur-none grayscale-80"
            src="https://i.ibb.co/nqtPT0bk/IMG-20250120-082516.jpg"
            alt="Profile Picture"
          />
          <span className="absolute mahi top-4 -right-6 bg-gradient-to-l from-slate-700 to-pink-900 rounded-md pl-2 px-1 py-0">
            Mahi <span className="text-yellow-300">•</span>
          </span>
        </div>
        <h1 className="2xl:text-3xl text-2xl font-semibold text-left tracking-tight leading-[120%]">
          👋🏻 Hi, I am
        </h1>
        <p className="2xl:text-4xl text-3xl px-8 font-semibold bg-gradient-to-r from-slate-700 to-pink-900 text-transparent bg-clip-text text-center tracking-tight leading-[120%]">
          Khaled Bin Monowar Hossian
        </p>
        <p className="2xl:text-5xl text-3xl px-8 font-semibold text-center tracking-wide leading-[150%]">
          Frontend Web Developer
        </p>
        <div className="flex items-center justify-center gap-6 z-[1000]">
          <a
            className="px-4 cursor-pointer py-2 rounded-full bg-gradient-to-r from-slate-700 to-pink-900"
            href="https://github.com/khbmh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <div className="flex items-center justify-center gap-4">
            <a
              className="text-blue-500 cursor-pointer bg-black text-2xl border-[1px] p-2 rounded-full"
              href="https://www.linkedin.com/in/Khbmh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white cursor-pointer bg-black text-2xl border-[1px] p-2 rounded-full"
              href="https://github.com/khbmh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
