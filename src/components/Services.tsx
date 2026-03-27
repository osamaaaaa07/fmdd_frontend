import { services } from "@/data/siteData";
import { ChevronRight, Check, GraduationCap, Briefcase, Rocket } from "lucide-react";

const icons = [GraduationCap, Briefcase, Rocket];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2 text-center">Nos Solutions</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
          Trois piliers pour votre réussite
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto mb-14">
          Le FMDD vous offre trois voies vers la réussite professionnelle : formation, emploi et entrepreneuriat.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={s.id}
                className={`group bg-gradient-to-br ${s.color} rounded-2xl p-7 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">{s.tagline}</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
