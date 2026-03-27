import { blogPosts } from "@/data/siteData";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Restez informé</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Blog & Actualités</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.summary}</p>
                <a href="#" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
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
