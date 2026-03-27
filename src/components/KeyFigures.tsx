import { useEffect, useRef, useState } from "react";
import { keyFigures } from "@/data/siteData";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-primary-foreground">
      {count}{suffix}
    </div>
  );
};

const KeyFigures = () => {
  return (
    <section className="py-20" style={{ backgroundImage: "var(--hero-gradient)" }}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Notre impact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">Quelques chiffres clés</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {keyFigures.map((fig) => (
            <div key={fig.id}>
              <Counter target={fig.value} suffix={fig.suffix} />
              <p className="text-primary-foreground/70 text-lg mt-3 font-medium">{fig.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
