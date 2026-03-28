import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-14 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">F</div>
              <span className="font-bold text-sm">FMDD</span>
            </div>
            <p className="text-primary-foreground/50 text-xs leading-relaxed">
              Forum Marocain pour le Développement Durable. Ensemble pour un avenir meilleur.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/70">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/50">
              <li><a href="#" className="hover:text-accent transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Nos Solutions</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Qui sommes-nous</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Témoignages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/70">Solutions</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/50">
              <li><a href="#" className="hover:text-accent transition-colors">FMDD Academy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FMDD Job</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FMDD Entrepreneuriat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-primary-foreground/70">Contact</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/50">
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-accent" /> contact@fmdd.ma</li>
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-accent" /> +212 645 466 188</li>
              <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" /> Casablanca, Maroc</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {[
                { i: <Facebook className="w-3.5 h-3.5" />, h: "https://web.facebook.com/p/Forum-Marocain-Pour-Le-D%C3%A9veloppement-Durable-61573191698612/?_rdc=1&_rdr#" },
                { i: <Linkedin className="w-3.5 h-3.5" />, h: "https://www.linkedin.com/company/forum-marocain-pour-le-d%C3%A9veloppement-durable/posts/?feedView=all" },
                { i: <Instagram className="w-3.5 h-3.5" />, h: "https://www.instagram.com/f.m.d.d/" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.h} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                >
                  {item.i}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-5 text-center text-[11px] text-primary-foreground/30">
          © 2026 Forum Marocain pour le Développement Durable. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
