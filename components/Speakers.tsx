"use client";

const speakers = [
  {
    name: "Anna Dean",
    role: "React Core Team",
    color: "bg-[#f7b5cd]",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
  },
  {
    name: "Chris Mezy",
    role: "Data Engineer",
    color: "bg-[#dbe8ea]",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Leslie Schnider",
    role: "Backend Architect",
    color: "bg-[#e6ddd6]",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
  },
  {
    name: "Jim Brickton",
    role: "AI Specialist",
    color: "bg-[#fcd561]",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=687&auto=format&fit=crop",
  },
];

export default function Speakers() {
  return (
    <div id="speakers" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end h-auto">
      {speakers.map((speaker) => (
        <div
          key={speaker.name}
          className={`arch-card ${speaker.color} h-[450px] md:h-[500px] lg:h-[580px] p-6 pb-0 flex flex-col relative overflow-hidden group`}
        >
          <div className="relative z-10 text-center mt-8 mb-4 text-black">
            <h3 className="font-black text-lg uppercase tracking-wider mb-1">{speaker.name}</h3>
            <p className="text-sm font-medium opacity-70 uppercase tracking-wide">{speaker.role}</p>
          </div>
          <div className="flex-1 w-full flex items-end justify-center relative">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="speaker-img w-[120%] max-w-none h-auto object-cover translate-y-4 group-hover:translate-y-2 transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}