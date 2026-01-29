import { Truck, Wrench, Clock, Shield, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Подача за 2 часа",
    description: "Экстренная доставка техники в любую точку Москвы и области",
  },
  {
    icon: Wrench,
    title: "Техника в идеале",
    description: "Ежедневное ТО и проверка всего парка перед выездом",
  },
  {
    icon: Truck,
    title: "Своя доставка",
    description: "Тралы и низкорамники в собственности — без посредников",
  },
  {
    icon: Shield,
    title: "Полное КАСКО",
    description: "Вся техника застрахована — вы ни за что не отвечаете",
  },
  {
    icon: CreditCard,
    title: "Гибкая оплата",
    description: "Безнал, карты, рассрочка для постоянных клиентов",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Диспетчер и механик на связи круглосуточно",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Почему выбирают нас
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Работаем <span className="text-gradient">надёжно</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            14 лет на рынке аренды спецтехники. Нам доверяют крупнейшие застройщики
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 card-gradient rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_20px_50px_-20px_hsl(0_0%_0%/0.5)]"
            >
              <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
