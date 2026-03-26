const destinations = [
    {
        id: 1,
        title: "Paris 1889",
        subtitle: "Belle Époque & Exposition Universelle",
        description: "Flânez sous la toute nouvelle Tour Eiffel et vivez l'effervescence de l'art dramatique parisien dans un luxe absolu.",
        imagePlaceholder: "Placeholder Visuel Paris 1889",
    },
    {
        id: 2,
        title: "Crétacé",
        subtitle: "-65 Millions d'années",
        description: "Un safari temporel exclusif au cœur d'une nature sauvage. Observez les géants avant leur disparition dans le confort absolu.",
        imagePlaceholder: "Placeholder Visuel Crétacé",
    },
    {
        id: 3,
        title: "Florence 1504",
        subtitle: "Renaissance Italienne",
        description: "Croisez Michel-Ange ou Léonard de Vinci. Admirez la création des plus grandes œuvres de l'humanité, aux premières loges.",
        imagePlaceholder: "Placeholder Visuel Florence 1504",
    }
];

export default function Destinations() {
    return (
        <section id="destinations" className="py-32 bg-[#0a0a0a] relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light mb-6">Destinations <span className="text-[#D4AF37] font-semibold text-glow">Exclusives</span></h2>
                    <div className="h-1 w-24 gold-gradient-bg mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden card-hover group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative h-72 bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                                {/* TODO: Intégrez l'image (visuels générés précédemment) ici avec la balise img ci-dessous */}
                                {/* <img src="..." alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" /> */}

                                <span className="text-gray-600 text-sm tracking-widest uppercase z-10">{dest.imagePlaceholder}</span>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent z-20"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 relative z-30">
                                <h3 className="text-3xl text-[#F6D365] mb-2">{dest.title}</h3>
                                <h4 className="text-xs tracking-widest text-gray-500 uppercase mb-5">{dest.subtitle}</h4>
                                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                                    {dest.description}
                                </p>
                                <div className="mt-8 flex justify-end">
                                    <span className="text-[#D4AF37] uppercase text-xs tracking-widest font-semibold flex items-center group-hover:text-[#F6D365] transition-colors">
                                        Explorer <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
