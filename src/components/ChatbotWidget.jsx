import { useState, useRef, useEffect } from 'react';

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', text: 'Bonjour ! Je suis votre Concierge Temporel. En quelle année souhaitez-vous voyager aujourd\'hui ?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, isTyping]);

    const handleSend = (e) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMsg = { id: Date.now(), sender: 'user', text: inputValue };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulation d'une réponse de l'IA (bot)
        setTimeout(() => {
            const botReply = {
                id: Date.now() + 1,
                sender: 'bot',
                text: 'Votre demande a bien été prise en compte par nos paradoxologues. Quel niveau de luxe exigez-vous pour cette expédition temporelle ?'
            };
            setMessages(prev => [...prev, botReply]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Fenêtre de Chat */}
            <div
                className={`mb-4 w-80 sm:w-[26rem] bg-[#161616] border border-[#D4AF37]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 h-[500px]' : 'scale-0 opacity-0 h-0'
                    }`}
            >
                {/* Header */}
                <div className="bg-[#111] border-b border-[#2a2a2a] p-4 flex justify-between items-center shadow-md z-10">
                    <div className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]"></div>
                        <span className="text-[#F6D365] font-semibold tracking-wide">Concierge Temporel</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Zone des messages */}
                <div className="flex-1 p-5 bg-[#0a0a0a] flex flex-col space-y-5 overflow-y-auto">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} transition-all`}
                        >
                            <div
                                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                        ? 'bg-gradient-to-br from-[#D4AF37]/30 to-[#B8860B]/10 text-white border border-[#D4AF37]/40 rounded-br-none'
                                        : 'bg-[#1a1a1a] text-gray-300 border border-[#2a2a2a] rounded-bl-none'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl rounded-bl-none p-4 flex space-x-1.5 items-center max-w-fit">
                                <div className="w-2 h-2 bg-[#D4AF37]/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-[#D4AF37]/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-[#D4AF37]/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Action / Input zone */}
                <form onSubmit={handleSend} className="p-3 border-t border-[#2a2a2a] bg-[#111]">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Posez votre question temporelle..."
                            className="w-full bg-[#1a1a1a] text-gray-200 border border-[#333] rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-all shadow-inner placeholder-gray-600"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="absolute right-2 p-2 text-[#D4AF37] hover:text-[#F6D365] disabled:opacity-30 disabled:hover:text-[#D4AF37] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* Bouton Bulle de Dialogue */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:bg-[#F6D365] font-bold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-1 z-50 text-glow"
                aria-label="Ouvrir le chat avec le concierge IA"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
