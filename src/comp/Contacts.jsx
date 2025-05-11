import toast, { Toaster } from 'react-hot-toast';
import { Links } from './Links';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacts() {
  const form = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <footer id="contacts" className="pt-[13vh] pb-[9vh] bg-gray-900 px-4">
      <div className="text-white max-w-[800px] mx-auto">
        <p className="text-4xl  font-bold text-center mb-4">
          Let's Connect and Create Magic Together!
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
            ref={form}
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
                name="user_name"
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
                name="user_email"
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
