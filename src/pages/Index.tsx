import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const products = [
    {
      name: "Говядина премиум",
      description: "Мраморная говядина высшего сорта",
      price: "890 ₽/кг",
      image: "https://cdn.poehali.dev/projects/89f42b06-b8e9-4acf-8173-8e41e914e5b3/files/e8316fc2-cd53-4e74-865d-d24466c94739.jpg"
    },
    {
      name: "Свинина фермерская",
      description: "Нежная свинина от местных фермеров",
      price: "520 ₽/кг",
      image: "https://cdn.poehali.dev/projects/89f42b06-b8e9-4acf-8173-8e41e914e5b3/files/1e107749-f48c-4aa3-b0ab-7941acf54a09.jpg"
    },
    {
      name: "Курица домашняя",
      description: "Экологически чистая домашняя птица",
      price: "380 ₽/кг",
      image: "https://cdn.poehali.dev/projects/89f42b06-b8e9-4acf-8173-8e41e914e5b3/files/91abf4fa-950f-47e2-b682-120ee7fdb607.jpg"
    }
  ];

  const benefits = [
    {
      icon: "Heart",
      title: "100% натуральное",
      description: "Без гормонов, антибиотиков и вредных добавок"
    },
    {
      icon: "Leaf",
      title: "От местных фермеров",
      description: "Прямые поставки с проверенных ферм региона"
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "Все сертификаты и документы на каждую партию"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставим свежее мясо в день заказа"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Покупаю мясо только здесь! Всегда свежее, вкусное. Дети в восторге от котлет!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      text: "Отличное качество, как у бабушки в деревне. Чувствуется разница с магазинным.",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      text: "Заказываем регулярно уже полгода. Ни разу не подвели по качеству и срокам.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Как я могу быть уверен в качестве мяса?",
      answer: "Все наше мясо проходит ветеринарный контроль. К каждой партии прилагаются сертификаты качества и документы от фермерских хозяйств. Мы работаем только с проверенными местными фермерами."
    },
    {
      question: "Как происходит доставка?",
      answer: "Доставка осуществляется в специальных холодильных контейнерах в день заказа. По городу - бесплатно при заказе от 2000 рублей. В пригород - по договоренности."
    },
    {
      question: "Можно ли вернуть товар?",
      answer: "Если вы не удовлетворены качеством, мы вернем деньги или заменим товар в течение 24 часов. Ваше доверие для нас важнее прибыли."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Принимаем наличные при получении, банковские карты и безналичный расчет для организаций."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Фермерское мясо <span className="text-primary">высшего качества</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                От местных производителей с гарантией свежести. Без гормонов и антибиотиков.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
                  Сделать заказ
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                  Посмотреть каталог
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральное</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/89f42b06-b8e9-4acf-8173-8e41e914e5b3/files/e8316fc2-cd53-4e74-865d-d24466c94739.jpg"
                alt="Премиальное мясо"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Гарантируем качество на каждом этапе</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4">Наша продукция</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свежее мясо с доставкой на дом</p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold">
                    {product.price}
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <Button className="w-full" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
                    Заказать
                    <Icon name="ShoppingCart" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/89f42b06-b8e9-4acf-8173-8e41e914e5b3/files/91abf4fa-950f-47e2-b682-120ee7fdb607.jpg"
                alt="Фермер"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Наша гарантия качества</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сертифицированные фермы</h3>
                    <p className="text-muted-foreground">Работаем только с хозяйствами, имеющими все необходимые разрешения и документы</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Shield" className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ветеринарный контроль</h3>
                    <p className="text-muted-foreground">Каждая партия проходит тщательную проверку качества и безопасности</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="RefreshCw" className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Возврат без вопросов</h3>
                    <p className="text-muted-foreground">Не устроило качество? Вернём деньги или заменим товар в течение 24 часов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы наших клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Нам доверяют сотни семей</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="font-semibold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Сделать заказ</h2>
            <p className="text-muted-foreground text-lg">Заполните форму и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Ваш заказ или вопрос</label>
                  <Textarea 
                    placeholder="Напишите, что вас интересует..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-14">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Часто задаваемые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на популярные вопросы</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Фермерское мясо</h3>
              <p className="text-background/80">Качественное мясо от местных производителей с гарантией свежести</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@fermer-myaso.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Фермерская, 12</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-background/80">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб-Вс: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 Фермерское мясо. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
