import { services } from "@/data/siteData";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Ce que nous offrons</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Nos services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-primary font-medium text-sm mb-3">{s.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group-hover:gap-3 gap-2"
              >
                En savoir plus
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
