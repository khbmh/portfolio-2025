import Cards from "./Cards";

function Skills() {
  return (
    <section id='skills' className="text-white bg-slate-950 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[90vw] max-w-[1200px]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
        <h1 className="2xl:text-5xl text-5xl px-8 font-bold text-center tracking-tight leading-[120%]">
          Technologies & Tools ✨ <br /> That Empowers Me ⚡
          </h1>
        </div>
        <div className="grid gap-2">
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default Skills;
