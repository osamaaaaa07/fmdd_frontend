import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Développement durable au Maroc" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--hero-gradient)", opacity: 0.85 }} />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-primary-foreground/90 text-xs font-medium">Forum Marocain pour le Développement Durable</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-primary-foreground leading-[1.1] mb-4">
            Ensemble pour un <span className="text-accent">Maroc durable</span> et prospère
          </h1>
          <p className="text-primary-foreground/70 text-base md:text-lg mb-8 leading-relaxed max-w-md">
            Le FMDD accompagne les jeunes marocains vers l'excellence : formations certifiantes, insertion professionnelle et soutien à l'entrepreneuriat.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all">
              Rejoindre le FMDD
              <span>→</span>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-primary-foreground/25 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/10 transition-all">
              ▶ Découvrir le FMDD
            </a>
          </div>
        </div>
      </div>

      {/* Floating stat cards — like fmdd.ma */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-3 z-10">
        {[
          { label: "FMDD Academy", sub: "+50 nouveaux cours" },
          { label: "Communauté", sub: "15K+ membres actifs" },
          { label: "Insertion Pro", sub: "87% taux de placement" },
        ].map((s) => (
          <div key={s.label} className="bg-background/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-sm flex items-center gap-3 min-w-[200px]">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">
              {s.label[0]}
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">{s.label}</p>
              <p className="text-[11px] text-muted-foreground">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
