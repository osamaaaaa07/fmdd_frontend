import { blogPosts } from "@/data/siteData";

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container">
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2 text-center">Actualités</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Blog & Actualités</h2>
        <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto mb-14">
          Articles, actualités et conseils pour engager et informer les visiteurs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{post.summary}</p>
                <a href="#" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                  Lire plus →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
