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

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const Icon = icons[idx];
            const images = [
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
            ];
            return (
              <div
                key={s.id}
                className="group relative bg-background rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image background with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={images[idx]} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Attractive message on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/20 backdrop-blur-[2px]">
                    <span className="bg-white text-primary text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Rejoignez-nous aujourd'hui !
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{s.tagline}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
                  
                  <a
                    href={s.link}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Découvrir le module
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
