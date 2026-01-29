import { Button } from "@/components/ui/button";
import excavator1 from "@/assets/excavator-1.jpg";
import excavator2 from "@/assets/excavator-2.jpg";
import excavator3 from "@/assets/excavator-3.jpg";

const excavators = [
  {
    id: 1,
    name: "Гусеничный экскаватор",
    model: "CAT 320",
    image: excavator1,
    weight: "20 тонн",
    bucket: "1.2 м³",
    depth: "6.7 м",
    price: "от 15 000 ₽/смена",
    popular: true,
  },
  {
    id: 2,
    name: "Мини-экскаватор",
    model: "Kubota KX080",
    image: excavator2,
    weight: "8 тонн",
    bucket: "0.3 м³",
    depth: "4.2 м",
    price: "от 8 000 ₽/смена",
    popular: false,
  },
  {
    id: 3,
    name: "Тяжёлый экскаватор",
    model: "Hitachi ZX350",
    image: excavator3,
    weight: "35 тонн",
    bucket: "1.8 м³",
    depth: "7.5 м",
    price: "от 25 000 ₽/смена",
    popular: false,
  },
];

const CatalogSection = () => {
  return (
    <section className="py-24 bg-background" id="catalog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Каталог техники
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Выберите <span className="text-gradient">экскаватор</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Вся техника проходит ежедневный осмотр и полное техобслуживание
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excavators.map((item) => (
            <div
              key={item.id}
              className="group relative card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(25_95%_53%/0.2)]"
            >
              {item.popular && (
                <div className="absolute top-4 right-4 z-10 primary-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Популярный
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <div className="text-primary text-sm font-medium mb-1">{item.model}</div>
                <h3 className="text-xl font-bold mb-4">{item.name}</h3>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Масса</div>
                    <div className="font-bold text-sm">{item.weight}</div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Ковш</div>
                    <div className="font-bold text-sm">{item.bucket}</div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Глубина</div>
                    <div className="font-bold text-sm">{item.depth}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gradient">{item.price}</div>
                  <Button variant="hero" size="sm">
                    Заказать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Смотреть весь каталог →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
