import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, FileText, Phone } from "lucide-react";
import { chatbotResponses } from "@/data/siteData";

interface Message {
  role: "bot" | "user";
  text: string;
}

const FloatingButtons = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Bonjour ! 👋 Je suis l'assistant du FMDD. Comment puis-je vous aider ?\n\nVous pouvez me poser des questions sur : **brochure**, **contact**, **formation**, **emploi**, **événements**..." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      const key = Object.keys(chatbotResponses).find((k) =>
        userMsg.toLowerCase().includes(k)
      );
      const response = key
        ? chatbotResponses[key]
        : "Je vous invite à consulter notre FAQ ou à nous contacter directement au +212 5 22 00 00 00. 😊";
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 800);
  };

  return (
    <>
      {/* Fixed side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        <a
          href="#"
          className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-l-lg text-sm font-medium hover:px-6 transition-all shadow-lg"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden md:inline">Brochure</span>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-l-lg text-sm font-medium hover:px-6 transition-all shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden md:inline">Contact</span>
        </a>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="group relative flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-l-lg text-sm font-medium hover:px-6 transition-all shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden md:inline">Chatbot</span>
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground text-xs rounded-lg px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            En quoi puis-je vous aider ?
          </span>
        </button>
      </div>

      {/* Chat window */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-card rounded-2xl shadow-2xl border border-border animate-chat-pop flex flex-col overflow-hidden"
          style={{ height: "480px" }}
        >
          {/* Chat header */}
          <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundImage: "var(--hero-gradient)" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground font-bold text-sm">
                F
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Assistant FMDD</p>
                <p className="text-primary-foreground/70 text-xs">En ligne</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
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
              <button
                onClick={sendMessage}
                className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
