import { galleryItems } from "@/data/siteData";

const colors = [
  "from-primary/30 to-secondary/30",
  "from-secondary/30 to-accent/30",
  "from-accent/30 to-primary/30",
  "from-primary/20 to-accent/20",
  "from-secondary/20 to-primary/20",
  "from-accent/20 to-secondary/20",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Nos moments forts</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Galerie</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <a
              key={item.id}
              href="#"
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="text-center p-4">
                <span className="text-4xl mb-2 block">📸</span>
                <p className="text-foreground font-semibold text-sm">{item.title}</p>
                <p className="text-muted-foreground text-xs">{item.category}</p>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
