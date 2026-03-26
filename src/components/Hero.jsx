export default function Hero() {
    return (
        <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Video/Animation Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[#111] animate-pulse"></div>
                {/* TODO: Intégrez votre vidéo de fond ou animation immersive ici */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl translate-y-[-5%]">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6">
                    Voyagez au-delà des <br className="hidden md:block" />
                    <span className="gold-gradient-text font-bold">Frontières du Temps</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                    Vivez l'histoire de vos propres yeux. Des expéditions luxueuses, sécurisées et inoubliables dans les époques les plus fascinantes.
                </p>
                <a
                    href="#destinations"
                    className="inline-block px-10 py-5 border border-[#D4AF37] text-[#F6D365] hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all duration-500 uppercase tracking-widest text-sm hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                >
                    Découvrir nos époques
                </a>
            </div>
        </section>
    );
}
