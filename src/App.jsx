import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import ChatbotWidget from './components/ChatbotWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#D4AF37]/30">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Destinations />
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
}

export default App;
