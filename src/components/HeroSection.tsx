import { Phone, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroExcavator from "@/assets/hero-excavator.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroExcavator} 
          alt="Мощный экскаватор на стройплощадке" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center gap-6 mb-16 text-sm text-muted-foreground animate-fade-in">
          <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <span>8 (800) 123-45-67</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Круглосуточно</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Москва и область</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Гарантия качества техники</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Аренда
            <span className="text-gradient"> экскаваторов</span>
            <br />
            без посредников
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Подача техники за <span className="text-foreground font-semibold">2 часа</span>. 
            Работаем с крупнейшими застройщиками Москвы с 2010 года.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="hero" size="xl">
              Заказать экскаватор
            </Button>
            <Button variant="heroOutline" size="xl">
              Смотреть каталог
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Единиц техники" },
              { value: "14", label: "Лет на рынке" },
              { value: "2ч", label: "Подача техники" },
              { value: "24/7", label: "Поддержка" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-black text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs uppercase tracking-widest">Листайте</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
