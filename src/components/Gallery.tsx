import { useState } from "react";
import { galleryItems } from "@/data/siteData";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container">
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2 text-center">Nos moments forts</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Galerie</h2>
        <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto mb-14">
          Photos et réalisations pour mettre en avant nos projets et événements.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary-foreground text-sm font-semibold">{item.title}</p>
                  <p className="text-primary-foreground/70 text-xs">{item.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl object-cover max-h-[70vh]"
            />
            <div className="mt-3 text-center">
              <p className="text-primary-foreground font-semibold">{selectedImage.title}</p>
              <p className="text-primary-foreground/60 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
