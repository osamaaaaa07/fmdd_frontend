const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Notre mission</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Qui sommes-nous ?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Le Forum Marocain pour le Développement Durable (FMDD) est une plateforme institutionnelle dédiée à la promotion 
            du développement durable au Maroc. Nous œuvrons pour fédérer les acteurs publics, privés et de la société civile 
            autour d'initiatives concrètes en matière de formation, d'emploi et d'entrepreneuriat vert.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Depuis notre création, nous avons accompagné des centaines de professionnels et d'entrepreneurs dans leur 
            transition vers des pratiques durables et responsables.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
