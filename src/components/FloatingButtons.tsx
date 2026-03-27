import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, FileText, Phone } from "lucide-react";
import { chatbotResponses } from "@/data/siteData";

interface Message { role: "bot" | "user"; text: string; }

const FloatingButtons = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Bonjour ! 👋 Je suis l'assistant du FMDD. Posez-moi vos questions sur nos formations, emplois, ou l'entrepreneuriat." },
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
      const response = key ? chatbotResponses[key] : "Je vous invite à consulter notre FAQ ou à nous contacter au +212 645 466 188. 😊";
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 600);
  };

  return (
    <>
      {/* Side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5">
        <a href="#" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-2.5 rounded-l-xl text-xs font-medium hover:px-5 transition-all shadow-sm border border-r-0 border-border">
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Brochure</span>
        </a>
        <a href="#contact" className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2.5 rounded-l-xl text-xs font-medium hover:px-5 transition-all shadow-sm">
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Contact</span>
        </a>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="group relative flex items-center gap-2 bg-accent text-accent-foreground px-3 py-2.5 rounded-l-xl text-xs font-medium hover:px-5 transition-all shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Chatbot</span>
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground text-[10px] rounded-lg px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            En quoi puis-je vous aider ?
          </span>
        </button>
      </div>

      {/* Chat window */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] bg-background rounded-2xl shadow-2xl border border-border animate-pop-in flex flex-col overflow-hidden" style={{ height: "440px" }}>
          <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundImage: "var(--hero-gradient)" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-primary-foreground font-bold text-xs">F</div>
              <div>
                <p className="text-primary-foreground font-semibold text-xs">Assistant FMDD</p>
                <p className="text-primary-foreground/60 text-[10px]">En ligne</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-primary-foreground/60 hover:text-primary-foreground"><X className="w-4 h-4" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted text-foreground rounded-bl-md"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-2.5 border-t border-border">
            <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-1.5">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Écrivez votre message..." className="flex-1 bg-transparent border-none outline-none text-xs text-foreground placeholder:text-muted-foreground" />
              <button onClick={sendMessage} className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
