import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/siteData";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Ils nous font confiance</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Témoignages</h2>
        </div>
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="bg-card rounded-2xl p-10 border border-border shadow-[var(--card-shadow)] min-h-[250px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-6">
              {t.avatar}
            </div>
            <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
              "{t.quote}"
            </blockquote>
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.title}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
