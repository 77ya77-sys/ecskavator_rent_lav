import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "");
  
  // Handle autofill: strip leading 7 or 8 if we have 11 digits
  let cleanDigits = digits;
  if (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))) {
    cleanDigits = digits.slice(1);
  }
  
  // Limit to 10 digits
  cleanDigits = cleanDigits.slice(0, 10);
  
  // Format as (XXX) XXX-XX-XX
  if (cleanDigits.length === 0) return "";
  if (cleanDigits.length <= 3) return `(${cleanDigits}`;
  if (cleanDigits.length <= 6) return `(${cleanDigits.slice(0, 3)}) ${cleanDigits.slice(3)}`;
  if (cleanDigits.length <= 8) return `(${cleanDigits.slice(0, 3)}) ${cleanDigits.slice(3, 6)}-${cleanDigits.slice(6)}`;
  return `(${cleanDigits.slice(0, 3)}) ${cleanDigits.slice(3, 6)}-${cleanDigits.slice(6, 8)}-${cleanDigits.slice(8)}`;
};

const getDigitsOnly = (formatted: string): string => {
  return formatted.replace(/\D/g, "").slice(0, 10);
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formatted = formatPhoneNumber(inputValue);
    setFormData({ ...formData, phone: formatted });
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const formatted = formatPhoneNumber(pastedText);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = getDigitsOnly(formData.phone);
    if (digits.length !== 10) {
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isPhoneValid = getDigitsOnly(formData.phone).length === 10;

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
              Связаться с нами
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Оставьте заявку —<br />
              <span className="text-gradient">перезвоним за 5 минут</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Расскажите о вашей задаче, и мы подберём оптимальную технику. 
              Консультация и выезд на объект — бесплатно.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+78001234567"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Бесплатный звонок</div>
                  <div className="text-xl font-bold">8 (800) 123-45-67</div>
                </div>
              </a>

              <a
                href="https://wa.me/79001234567"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--success)/.2)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-[hsl(var(--success))]" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="text-xl font-bold">+7 (900) 123-45-67</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="card-gradient rounded-3xl p-8 md:p-10 border border-border shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Заявка отправлена!</h3>
                <p className="text-muted-foreground">Перезвоним в течение 5 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-medium select-none">
                      +7
                    </span>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onPaste={handlePhonePaste}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="(900) 123-45-67"
                    />
                  </div>
                  {formData.phone && !isPhoneValid && (
                    <p className="text-destructive text-sm mt-1">Введите 10 цифр номера</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение (опционально)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Опишите вашу задачу или укажите нужную технику"
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={!isPhoneValid}>
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
