import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container">
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2 text-center">Témoignages</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-14">
          Ils ont transformé leur parcours
        </h2>

        <div className="max-w-xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm min-h-[260px] flex flex-col items-center justify-center">
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <blockquote className="text-foreground text-base leading-relaxed mb-6">
              "{t.quote}"
            </blockquote>
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover mb-3" loading="lazy" />
            <p className="font-semibold text-sm text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.title}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border w-1.5"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((c) => (c + 1) % testimonials.length)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
