import { galleryItems } from "@/data/siteData";
import { ChevronRight } from "lucide-react";

const Gallery = () => {

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container">
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2 text-center">Nos moments forts</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Galerie</h2>
        <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto mb-14">
          Photos et réalisations pour mettre en avant nos projets et événements.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={`#event-${item.id}`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-white font-bold text-base md:text-lg mb-4 line-clamp-1">{item.title}</h4>
                <div className="flex items-center gap-2 text-white/80 text-[10px] uppercase font-bold tracking-tighter group-hover:text-accent transition-colors">
                  Voir l'événement <ChevronRight className="w-3 h-3" /> 
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Redirection notice if needed */}
    </section>
  );
};

export default Gallery;
