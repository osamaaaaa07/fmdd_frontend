import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { menuItems } from "@/data/siteData";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-card"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container flex items-center justify-between py-2 text-xs text-muted-foreground">
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">العربية</a>
            <a href="#" className="hover:text-primary transition-colors font-semibold text-foreground">Français</a>
            <a href="#" className="hover:text-primary transition-colors">English</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-1.5 rounded-full border border-primary text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all">
              Se connecter
            </button>
            <button className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            F
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-sm font-bold text-foreground leading-tight block">Forum Marocain</span>
            <span className="text-[11px] text-muted-foreground leading-tight">Pour le Développement Durable</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.label === "Contactez-nous" ? "#contact" : "#"}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md"
              >
                {item.label}
                {item.children.length > 0 && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
              {item.children.length > 0 && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-lg border border-border py-2 min-w-[200px] animate-chat-pop">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center bg-muted rounded-full px-3 py-1.5">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-transparent border-none outline-none text-sm ml-2 w-32 placeholder:text-muted-foreground"
            />
          </div>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-chat-pop">
          <div className="container py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                <a href="#" className="block py-2 text-sm font-medium text-foreground">
                  {item.label}
                </a>
                {item.children.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <a key={child} href="#" className="block py-1.5 text-sm text-muted-foreground">
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              <button className="flex-1 py-2 rounded-full border border-primary text-primary text-sm font-medium">
                Se connecter
              </button>
              <button className="flex-1 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
