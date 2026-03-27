import { missionPillars } from "@/data/siteData";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2">Notre Mission</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Construire aujourd'hui les solutions de demain
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Le FMDD s'engage à transformer le potentiel de la jeunesse marocaine en succès concret à travers sept piliers d'excellence.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {missionPillars.map((p) => (
                <span key={p} className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  {p}
                </span>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
              En savoir plus →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop" alt="Collaboration" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop" alt="Orientation" className="rounded-2xl w-full h-48 object-cover mt-8" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop" alt="Formation" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop" alt="Durabilité" className="rounded-2xl w-full h-48 object-cover mt-8" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
