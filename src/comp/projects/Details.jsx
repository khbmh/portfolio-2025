// react icons
import { RxCross1 } from 'react-icons/rx';

const Details = ({ data, isDetailsOpen, setIsDetailsOpen }) => {
  return (
    <div
      className={`${
        isDetailsOpen ? ' visible' : ' invisible'
      } w-screen min-h-screen -mt-[5vh] fixed flex items-end justify-end top-0 left-0 z-[200000000] transition-all duration-300`}
    >
      <div
        className={`${
          isDetailsOpen
            ? ' translate-y-[0px] opacity-100'
            : ' translate-y-[200px] opacity-0'
        } overflow-y-scroll container min-h-screen relative bg-slate-950 text-white transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-end">
          <RxCross1
            className="absolute top-[90%] left-[50%] p-2 text-[2.5rem] bg-red-600 hover:bg-red-800 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsDetailsOpen(false)}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 py-[10vh]">
          <div className="flex flex-col lg:flex-row gap-4 px-4">
            <img
              className="max-w-[500px] w-[95vw] mx-auto rounded-md"
              src={data?.image}
              alt=""
            />
            <div>
              <h2 className="text-xl font-semibold my-4">{data.name}</h2>
              <h3 className="mahi opacity-70">{data.details.description}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {data.details.techStack.map((skill, index) => (
                  <p
                    key={index}
                    className="text-sm bg-black px-2 py-1 rounded-full border border-white/60"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 my-4 *:px-4 *:py-1 *:bg-slate-800">
                <a href={data.details.liveProjectLink} target='_blank'>Live Link</a>
                <a href={data.details.githubRepo} target='_blank'>Github</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div>
              <h3 className="text-2xl">Challenges Faced</h3>
              {data.details.challengesFaced.map((challenge, index) => (
                <p key={index} className="mahi bg-black">
                  => {challenge}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-2xl">Future Improvements</h3>
              {data.details.futureImprovements.map((challenge, index) => (
                <p key={index} className="mahi bg-black">
                  => {challenge}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
