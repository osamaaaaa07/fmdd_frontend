import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronDown, Phone, Mail } from "lucide-react";
import { menuItems } from "@/data/siteData";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background shadow-sm" : "bg-background"}`}>
      {/* Top info bar */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between py-1.5 text-xs text-primary-foreground/80">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +212 645 466 188</span>
            <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3" /> contact@fmdd.ma</span>
          </div>
          <span className="hidden md:block">Forum Marocain pour le Développement Durable</span>
          <div className="flex gap-3">
            <a href="#" className="hover:text-primary-foreground">العربية</a>
            <a href="#" className="text-primary-foreground font-medium">FR</a>
            <a href="#" className="hover:text-primary-foreground">EN</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-base">
            F
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="text-sm font-bold text-foreground block">FMDD</span>
            <span className="text-[10px] text-muted-foreground">Développement Durable</span>
          </div>
        </a>

        {/* Desktop nav — inwi style: simple, spaced, clean */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children.length > 0 ? handleMouseEnter(item.label) : undefined}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg"
              >
                {item.label}
                {item.children.length > 0 && <ChevronDown className="w-3 h-3 opacity-50" />}
              </a>
              {item.children.length > 0 && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 bg-background rounded-xl shadow-lg border border-border py-1.5 min-w-[200px] animate-pop-in">
                  {item.children.map((child) => (
                    <a key={child} href="#" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-lg mx-1">
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg">
            <Search className="w-4 h-4" />
          </button>
          <a href="#" className="hidden md:inline-flex text-[13px] font-medium text-foreground/80 hover:text-primary px-3 py-2 transition-colors">
            Connexion
          </a>
          <a href="#" className="hidden md:inline-flex text-[13px] font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition-colors">
            S'inscrire
          </a>
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-pop-in">
          <div className="container py-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <a href={item.href} className="block py-2.5 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
                {item.children.length > 0 && (
                  <div className="pl-4 space-y-0.5">
                    {item.children.map((child) => (
                      <a key={child} href="#" className="block py-1.5 text-sm text-muted-foreground">{child}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              <a href="#" className="flex-1 text-center py-2.5 rounded-full border border-primary text-primary text-sm font-medium">Connexion</a>
              <a href="#" className="flex-1 text-center py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">S'inscrire</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
