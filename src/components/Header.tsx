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
      <div className="bg-primary hidden sm:block">
        <div className="container flex items-center justify-between py-1.5 text-[11px] text-primary-foreground/90">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> +212 645 466 188</span>
            <span className="hidden md:flex items-center gap-1.5"><Mail className="w-3 h-3" /> contact@fmdd.ma</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-3 font-medium">
              <button className="hover:text-accent transition-colors">العربية</button>
              <button className="text-accent underline underline-offset-4">Français</button>
              <button className="hover:text-accent transition-colors">English</button>
            </div>
            <div className="h-3 w-[1px] bg-primary-foreground/20 hidden md:block" />
            <span className="hidden md:block opacity-80 uppercase tracking-wider">Forum Marocain Pour Le Développement Durable</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3 lg:py-5">
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-primary overflow-hidden bg-white shadow-sm transition-transform group-hover:scale-105">
            <img 
              src="/assets/logo.png" 
              alt="FMDD Logo" 
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-primary text-primary-foreground font-bold text-xl">F</div>';
              }}
            />
          </div>
          <div className="hidden sm:block leading-none">
            <h1 className="text-base lg:text-lg font-bold text-foreground uppercase tracking-tight">FMDD</h1>
            <p className="text-[9px] lg:text-[10px] text-muted-foreground font-medium uppercase tracking-[0.1em]">Forum Marocain Pour Le<br/>Développement Durable</p>
          </div>
        </a>

        {/* Desktop nav */}
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
                className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg"
              >
                {item.label}
                {item.children.length > 0 && <ChevronDown className="w-3 h-3 opacity-50" />}
              </a>
              {item.children.length > 0 && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 bg-background rounded-xl shadow-lg border border-border py-1.5 min-w-[220px] animate-pop-in">
                  {item.children.map((child) => (
                    <a key={child.name} href={child.href} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-lg mx-1">
                      {child.name}
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
            Se connecter
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
        <div className="lg:hidden border-t border-border bg-background animate-pop-in max-h-[70vh] overflow-y-auto">
          <div className="container py-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <a href={item.href} className="block py-2.5 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
                {item.children.length > 0 && (
                  <div className="pl-4 space-y-0.5">
                    {item.children.map((child) => (
                      <a key={child.name} href={child.href} className="block py-1.5 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              <a href="#" className="flex-1 text-center py-2.5 rounded-full border border-primary text-primary text-sm font-medium">Se connecter</a>
              <a href="#" className="flex-1 text-center py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">S'inscrire</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
