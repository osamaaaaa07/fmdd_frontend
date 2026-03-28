import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, FileText, Phone } from "lucide-react";
import { chatbotResponses } from "@/data/siteData";

interface Message { role: "bot" | "user"; text: string; }

const FloatingButtons = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Bonjour ! 👋 Je suis l'assistant du FMDD.\n\nComment puis-je vous aider ?\n\nVous pouvez me poser des questions sur :\n• 🎓 Formations\n• 💼 Emploi\n• 🚀 Entrepreneuriat\n• 📄 Brochure\n• 📅 Événements\n• 📞 Contact" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      const key = Object.keys(chatbotResponses).find((k) => userMsg.toLowerCase().includes(k));
      const response = key ? chatbotResponses[key] : "Je vous invite à consulter notre FAQ ou à nous contacter directement au +212 645 466 188. 😊\n\nTapez 'aide' pour voir les sujets disponibles.";
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 600);
  };

  return (
    <>
      {/* Fixed side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 pointer-events-none items-end">
        <a 
          href="/brochure.pdf" 
          target="_blank"
          className="group pointer-events-auto relative flex items-center bg-white text-primary rounded-l-2xl shadow-2xl border border-border h-12 lg:h-14 w-44 translate-x-[calc(44*4px-48px)] lg:translate-x-[calc(44*4px-56px)] hover:translate-x-0 transition-all duration-300 ease-out overflow-hidden"
        >
          <div className="w-12 lg:w-14 h-full flex items-center justify-center shrink-0 transition-all duration-300">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-6">BROCHURE</span>
        </a>
        
        <a 
          href="#contact" 
          className="group pointer-events-auto relative flex items-center bg-primary text-primary-foreground rounded-l-2xl shadow-2xl h-12 lg:h-14 w-44 translate-x-[calc(44*4px-48px)] lg:translate-x-[calc(44*4px-56px)] hover:translate-x-0 transition-all duration-300 ease-out overflow-hidden"
        >
          <div className="w-12 lg:w-14 h-full flex items-center justify-center shrink-0 transition-all duration-300">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-6">CONTACT</span>
        </a>

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="group pointer-events-auto relative flex items-center bg-accent text-accent-foreground rounded-l-2xl shadow-2xl h-12 lg:h-14 w-44 translate-x-[calc(44*4px-48px)] lg:translate-x-[calc(44*4px-56px)] hover:translate-x-0 transition-all duration-300 ease-out overflow-hidden"
        >
          <div className="w-12 lg:w-14 h-full flex items-center justify-center shrink-0 transition-all duration-300">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-6 uppercase tracking-wider">CHATBOT</span>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-foreground text-background text-[10px] font-bold rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl translate-x-4 group-hover:translate-x-0">
            En quoi puis-je vous aider ?
          </span>
        </button>
      </div>

      {/* Chat window */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-background rounded-2xl shadow-2xl border border-border animate-pop-in flex flex-col overflow-hidden" style={{ height: "480px" }}>
          {/* Header */}
          <div className="px-6 py-5 flex items-center justify-between border-b border-border" style={{ backgroundImage: "linear-gradient(to right, #001233, #002855)" }}>
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full border border-primary-foreground/20 overflow-hidden bg-white/10 flex items-center justify-center shadow-inner">
                <img 
                  src="/assets/logo.png" 
                  alt="FMDD" 
                  className="w-full h-full object-contain p-0.5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-primary-foreground font-bold text-lg">F</span>';
                  }}
                />
              </div>
              <div className="leading-tight">
                <p className="text-primary-foreground font-bold text-sm tracking-wide uppercase">CAHTBOTT FMDD</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(255,183,3,0.6)]" />
                  <p className="text-primary-foreground/70 text-[10px] uppercase font-bold tracking-tighter">Support en ligne</p>
                </div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-white hover:bg-white/20 transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={sendMessage} className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
