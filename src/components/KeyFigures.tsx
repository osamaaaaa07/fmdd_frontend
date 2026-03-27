import { useEffect, useRef, useState } from "react";
import { keyFigures } from "@/data/siteData";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
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
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-extrabold text-foreground">
      {count.toLocaleString('fr-FR')}{suffix}
    </div>
  );
};

const KeyFigures = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {keyFigures.map((fig) => (
            <div key={fig.id} className="text-center">
              <Counter target={fig.value} suffix={fig.suffix} />
              <p className="text-sm font-semibold text-foreground mt-1">{fig.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{fig.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
