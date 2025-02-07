import toast, { Toaster } from 'react-hot-toast';
import { Links } from './Links';

function Contacts() {
  const handleForm = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    e.target.reset();
    toast.success('Thanks for messaging!');
  };
  return (
    <footer id="contacts" className="pt-[13vh] pb-[9vh] bg-gray-900 px-4">
      <div className="text-white max-w-[800px] mx-auto">
        <p className="text-4xl  font-bold text-center mb-4">
          Let’s Connect and Create Magic Together!
        </p>
        <h1 className="text-lg text-center mb-8 opacity-80">
          If you have any questions, ideas, or just want to chat about exciting
          projects, don't hesitate to drop a message. I am always open to new
          collaborations and opportunities.
        </h1>
      </div>
      <div className="h-fit container mx-auto flex-col lg:flex-row-reverse flex justify-around items-center">
        <div className="">
          <form
            onSubmit={handleForm}
            className="text-white w-full max-w-md lg:min-w-[400px] rounded"
          >
            <div className="mb-2">
              <label htmlFor="name" className="block mahi mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mahi text-white px-3 py-2 border border-white/40 rounded focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mahi mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mahi text-white px-3 py-2 border border-white/40 rounded focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mahi mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full mahi text-white px-3 py-2 border border-white/40 rounded focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                // className="px-6 mahi font-semibold cursor-pointer py-2 rounded-full bg-white text-green-900"
                className="px-6 mahi text-white cursor-pointer py-2 rounded-full bg-gradient-to-r from-slate-700 to-pink-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <Links />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </footer>
  );
}

export default Contacts;
2;
