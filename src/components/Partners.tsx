import { partners } from "@/data/siteData";

const Partners = () => {
  const tripled = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-14 border-y border-border">
      <div className="container">
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-8 text-center">Nos Partenaires</p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {tripled.map((p, i) => (
              <div key={`${p}-${i}`} className="shrink-0 mx-10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground/60">{p}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
