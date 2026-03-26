export default function Footer() {
    return (
        <footer className="bg-[#111] border-t border-[#2a2a2a] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-6 md:mb-0">
                    <span className="text-[#D4AF37] text-2xl tracking-widest uppercase font-bold">Time Travel Agency</span>
                    <p className="text-gray-500 text-sm mt-3 font-light max-w-sm mx-auto md:mx-0">
                        L'Histoire n'attend que vous. Tous droits de modifications temporelles réservés.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">© {new Date().getFullYear()} Time Travel Agency</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
                    <a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-wider transition-colors">Mentions Légales</a>
                    <a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-wider transition-colors">Confidentialité</a>
                    <a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-wider transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
