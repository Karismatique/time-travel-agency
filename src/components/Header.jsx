export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-widest text-[#D4AF37] uppercase">
                    Time Travel Agency
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#accueil" className="text-gray-300 hover:text-[#F6D365] transition-colors uppercase text-sm tracking-wider">Accueil</a>
                    <a href="#destinations" className="text-gray-300 hover:text-[#F6D365] transition-colors uppercase text-sm tracking-wider">Destinations</a>
                    <a href="#reservation" className="text-gray-300 hover:text-[#F6D365] transition-colors uppercase text-sm tracking-wider">Réservation</a>
                </nav>
            </div>
        </header>
    );
}
