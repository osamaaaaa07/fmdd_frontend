import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                F
              </div>
              <div>
                <span className="font-serif text-sm font-bold block">FMDD</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Forum Marocain pour le Développement Durable. Ensemble pour un avenir meilleur.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">Présentation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Nos services</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">Actualités</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Nos solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">FMDD Academy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FMDD Job</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FMDD Entrepreneuriat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                contact@fmdd.ma
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                +212 5 22 00 00 00
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                Casablanca, Maroc
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {["Facebook", "LinkedIn", "Twitter", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-xs text-primary-foreground/60 hover:border-accent hover:text-accent transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2026 Forum Marocain pour le Développement Durable. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
