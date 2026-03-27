const CTA = () => {
  return (
    <section className="py-20" style={{ backgroundImage: "var(--hero-gradient)" }}>
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Prêt à transformer votre avenir ?
        </h2>
        <p className="text-primary-foreground/70 text-sm max-w-md mx-auto mb-8">
          Rejoignez les milliers de jeunes Marocains qui construisent leur réussite avec le FMDD. Inscription gratuite.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#" className="px-7 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all">
            Créer mon compte gratuit
          </a>
          <a href="#about" className="px-7 py-3 rounded-full border border-primary-foreground/25 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/10 transition-all">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
