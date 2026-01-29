import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-black mb-4">
              <span className="text-gradient">ЭКСКА</span>ПРОКАТ
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Аренда строительной спецтехники в Москве и Московской области. 
              Работаем с 2010 года. Парк из 150+ единиц техники.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              {["VK", "TG", "YT"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-sm font-bold hover:border-primary hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-3 text-muted-foreground">
              {["Каталог техники", "О компании", "Наши работы", "Контакты", "Блог"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Москва, ул. Строителей, д. 15</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+78001234567" className="hover:text-primary transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@exkaprokat.ru" className="hover:text-primary transition-colors">
                  info@exkaprokat.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Круглосуточно, 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 ЭКСКАПРОКАТ. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
