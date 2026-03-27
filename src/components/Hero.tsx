import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Paysage durable au Maroc" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Forum Marocain pour le Développement Durable
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Construisons ensemble un avenir durable
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
            Formation, emploi et entrepreneuriat au service du développement durable au Maroc et en Afrique.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
            >
              Découvrir nos services
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:border-primary-foreground/60 transition-all"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
