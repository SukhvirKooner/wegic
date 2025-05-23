import React from 'react';

const voices = [
  {
    name: 'Annie',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: `Even though my English isn't perfect, Wegic is simple and straightforward, without being too difficult to use. We don't have staff with technical background, so Wegic was the perfect fit for quickly building a website to showcase our work.`,
    bg: 'bg-neutral-50',
  },
  {
    name: 'Martin',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: `While searching for AI-powered tools to build websites, I discovered that Wegic is one of the best options.`,
    bg: 'bg-neutral-50',
  },
  {
    name: 'Lee Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: `With the AI system, the website building process became much easier. It was simple, quick, and allowed my creativity to flow more freely. I was able to clearly understand what I was putting into it, what I wanted, and how I wanted it to look.`,
    bg: 'bg-neutral-50',
  },
  {
    name: 'Leonardo Acero Guerra',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    quote: `What really attracted me initially was the promise that I could create and edit everything on my own, without relying on third-party programmers. This independence meant I wouldn't have to deal with additional costs, whether in terms of money, time, or effort.`,
    bg: 'bg-yellow-50',
  },
  {
    name: 'hasantoxr',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    quote: `I built a complete website modified only by AI, without writing a single line of code.`,
    bg: 'bg-neutral-50',
  },
  {
    name: 'Bella',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: `Wegic helped us to skip the need of hiring an external agency to build our website. I'll say Wegic is a great cost-saver.`,
    bg: 'bg-green-50',
  },
  {
    name: 'Luke',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: `Wegic's AI made it so easy to get started. The clear initial guidance allowed me to set up the basics without requiring advanced skills. The entire process was smooth and intuitive, perfectly suited for showcasing my arcade game business.`,
    bg: 'bg-neutral-50',
  },
];

const VoicesSection = () => {
  return (
    <section className="bg-[#faf9f7] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-3xl italic text-gray-300 mb-2 font-bold">Voices</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black">What Wegicians feel</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voices.slice(0,6).map((v, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 ${v.bg} shadow transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-400 border border-transparent flex flex-col`}
            >
              <div className="flex items-center mb-4">
                <img src={v.avatar} alt={v.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow mr-4" />
                <span className="font-semibold text-lg text-gray-900">{v.name}</span>
              </div>
              <div className="text-gray-700 text-base">"{v.quote}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection; 