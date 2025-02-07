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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s',
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
        img: 'https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg',
        // img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
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
    <div className="flex flex-col my-[12vh] gap-[10vh] z-[20] bg-slate-950/80 px-0">
      {data.map(({ name, photo, technologies }, i) => (
        <div
          key={i}
          className="h-[50vh] lg:[80vh] w-[90vw] mx-auto max-w-[600px] bg-slate-950 border border-white/20 flex flex-col items-center justify-center gap-12 lg:gap-16 text-center"
        >
          <p className="text-3xl">{name}</p>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {technologies.map(({ name, img }, j) => (
              <div key={j} className="flex lg:flex-col justify-center items-center gap-4">
                <img className="w-[50px]" src={img} alt={name} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
