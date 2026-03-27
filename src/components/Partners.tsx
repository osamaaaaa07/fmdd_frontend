import { partners } from "@/data/siteData";

const Partners = () => {
  const tripled = [...partners, ...partners, ...partners];

  return (
    <section className="py-14 border-t border-border">
      <div className="container">
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-8 text-center">Nos Partenaires</p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {tripled.map((p, i) => (
              <div key={`${p}-${i}`} className="shrink-0 mx-8 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
