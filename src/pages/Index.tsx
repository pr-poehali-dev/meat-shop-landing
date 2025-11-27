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
      name: "Печень говяжья сушёная",
      description: "Нежные полоски для дрессировки и поощрения",
      features: ["Идеально для обучения", "Легко ломается", "Средняя твёрдость"],
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
    },
    {
      name: "Лёгкое баранье",
      description: "Хрустящие кусочки для чистки зубов",
      features: ["Низкокалорийное", "Укрепляет дёсны", "Для любого возраста"],
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
    },
    {
      name: "Трахея говяжья",
      description: "Долгая жевательная радость для крупных пород",
      features: ["Долгоиграющая", "Полезна для суставов", "Природный хондроитин"],
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80"
    },
    {
      name: "Сердце куриное",
      description: "Мягкие кусочки для щенков и мелких пород",
      features: ["Нежная текстура", "Богато таурином", "Для привередливых"],
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80"
    },
    {
      name: "Пищевод говяжий",
      description: "Длинные полоски для активного жевания",
      features: ["Естественный массаж дёсен", "Без запаха", "Гипоаллергенное"],
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80"
    },
    {
      name: "Ассорти субпродуктов",
      description: "Смесь лучших лакомств в крафтовой коробке",
      features: ["5 видов субпродуктов", "Подарочная упаковка", "Открытка в подарок"],
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80"
    }
  ];

  const benefits = [
    {
      icon: "Home",
      title: "Своё производство",
      description: "Не перепродаём — создаём сами в собственной сушильной камере"
    },
    {
      icon: "Leaf",
      title: "100% натуральное",
      description: "Только мясо. Никаких консервантов, красителей и усилителей вкуса"
    },
    {
      icon: "HandMetal",
      title: "Ручная работа",
      description: "Каждый кусочек обработан и проверен вручную с любовью"
    },
    {
      icon: "Thermometer",
      title: "Бережная сушка",
      description: "Сушим при низкой температуре — сохраняем все полезные вещества"
    }
  ];

  const useCases = [
    {
      icon: "GraduationCap",
      title: "Дрессировка",
      description: "Маленькие кусочки печени или сердца — идеальная награда за выполненную команду"
    },
    {
      icon: "Heart",
      title: "Поощрение",
      description: "Похвалите за хорошее поведение вкусным лакомством — питомец запомнит!"
    },
    {
      icon: "Pill",
      title: "Дать лекарство",
      description: "Спрячьте таблетку в мягкое лакомство — питомец съест с радостью"
    },
    {
      icon: "Clock",
      title: "Отвлечь и занять",
      description: "Трахея или пищевод займут любимца надолго, пока вы заняты делами"
    }
  ];

  const reviews = [
    {
      name: "Марина и Джек",
      breed: "Лабрадор, 3 года",
      text: "Джек в восторге от трахеи! Грызёт по часу, зубы стали чище. Заказываем регулярно, упаковка красивая — даже самой приятно дарить.",
      rating: 5
    },
    {
      name: "Алексей и Рекс",
      breed: "Немецкая овчарка, 5 лет",
      text: "Тренируем Рекса только на вашей печени. Удобно ломается, не крошится. Качество — огонь! Ребята, вы лучшие.",
      rating: 5
    },
    {
      name: "Ольга и Тоша",
      breed: "Йорк, 1,5 года",
      text: "Тоша очень привередливый, но ваше куриное сердце лопает за обе щеки! Мягкое, не жёсткое. Спасибо за крафтовую упаковку и милую открытку 💕",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Из чего делаются лакомства?",
      answer: "Мы используем только натуральные субпродукты: печень, лёгкое, сердце, трахею, пищевод говядины, баранины и птицы. Всё мясо проходит ветеринарный контроль. Никаких добавок — только мясо и низкотемпературная сушка."
    },
    {
      question: "Как выбрать лакомство для моей собаки?",
      answer: "Для дрессировки и щенков — мягкая печень или сердце. Для чистки зубов и активного жевания — лёгкое, трахея, пищевод. Для аллергиков — моносостав (один вид мяса). Напишите нам, подберём индивидуально под породу, возраст и цель!"
    },
    {
      question: "Как долго хранятся лакомства?",
      answer: "В закрытой упаковке — до 6 месяцев. После вскрытия — до 1 месяца в сухом прохладном месте. Мы упаковываем в крафтовые пакеты с зип-замком для сохранения свежести."
    },
    {
      question: "Можно ли давать щенкам?",
      answer: "Да! Для щенков с 2-3 месяцев подходят мягкие лакомства: печень, сердце. Начинайте с маленьких кусочков. Твёрдые лакомства (трахея, пищевод) — с 6 месяцев, когда сменятся зубы."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/79999999999?text=Здравствуйте!%20Хочу%20заказать%20лакомства%20для%20собаки", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/akdus_treats", "_blank");
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold">
                🐾 Собственное производство
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Натуральные лакомства <span className="text-amber-600">Ак дус</span>
              </h1>
              <p className="text-xl text-gray-700">
                Создаём из отборных субпродуктов, сушим вручную при низкой температуре. Без консервантов. Только польза и радость для вашего питомца.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 bg-amber-600 hover:bg-amber-700" onClick={openWhatsApp}>
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  WhatsApp заказ
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-amber-600 text-amber-700 hover:bg-amber-50" onClick={openTelegram}>
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-amber-600">1000+</div>
                  <div className="text-sm text-gray-600">Довольных хвостов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-600">Натурально</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">Своё</div>
                  <div className="text-sm text-gray-600">Производство</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/40 to-orange-300/40 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                alt="Счастливая собака"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Почему Ак дус?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Мы делаем лакомства с любовью и заботой</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg animate-fade-in bg-amber-50/30" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon as any} className="text-amber-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Для чего нужны лакомства?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Это не просто вкусняшка — это инструмент воспитания и заботы</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name={useCase.icon as any} className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Наш ассортимент</h2>
          <p className="text-center text-gray-600 mb-4 text-lg">Подберём лакомство под вашу задачу и породу</p>
          <p className="text-center text-amber-600 mb-12 font-semibold">
            Напишите нам — поможем выбрать индивидуально!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in border-2 border-amber-100 hover:border-amber-300" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="space-y-2 pt-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon name="Check" className="text-green-600 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-4" onClick={openWhatsApp}>
                    Заказать в WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Как мы делаем лакомства</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Отбор сырья</h3>
                    <p className="text-gray-600">Закупаем только свежие субпродукты с ветконтролем: печень, лёгкое, сердце, трахею, пищевод</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Ручная обработка</h3>
                    <p className="text-gray-600">Каждый кусочек моем, нарезаем и готовим вручную — никаких конвейеров</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Бережная сушка</h3>
                    <p className="text-gray-600">Сушим при низкой температуре 10-15 часов — сохраняем все витамины и микроэлементы</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Красивая упаковка</h3>
                    <p className="text-gray-600">Упаковываем в крафтовые пакеты с зип-замком, вешаем бирки, кладём открытку с милой иллюстрацией</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                alt="Процесс производства"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Отзывы хвостатых гурманов</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Нам доверяют сотни владельцев собак</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in border-2 border-amber-100" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-amber-500 fill-amber-500" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.breed}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Подарочные наборы</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
            Оформляем лакомства в красивые крафтовые коробки с бирками и открыточками. Добавляем наклейки: «Моему мокрому носику», «Моей любимой морде» 🐕
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80"
              alt="Подарочная упаковка"
              className="rounded-xl w-full h-64 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Идеально для подарка!</h3>
            <p className="text-gray-600 mb-6">
              Соберём индивидуальный набор под породу, возраст и вкусы вашего питомца
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8" onClick={openWhatsApp}>
              <Icon name="Gift" className="mr-2" size={20} />
              Заказать подарочный набор
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Частые вопросы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Ответы на важные вопросы о лакомствах</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-amber-100 rounded-lg px-6 bg-amber-50/30">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5 text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Быстрый заказ</h2>
            <p className="text-gray-700 text-lg">Напишите нам удобным способом — ответим в течение 15 минут</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700" onClick={openWhatsApp}>
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Написать в WhatsApp
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700" onClick={openTelegram}>
              <Icon name="Send" className="mr-2" size={24} />
              Написать в Telegram
            </Button>
          </div>

          <Card className="shadow-xl border-2 border-amber-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Или оставьте заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Ваше имя</label>
                  <Input 
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Телефон или Telegram</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__ или @username"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Расскажите о вашем питомце</label>
                  <Textarea 
                    placeholder="Порода, возраст, предпочтения, для какой цели нужны лакомства..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-14 bg-amber-600 hover:bg-amber-700">
                  Отправить заявку
                  <Icon name="Bone" className="ml-2" size={20} />
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Ак дус</h3>
              <p className="text-gray-400">Натуральные лакомства для собак с собственного производства. Сделано с любовью 🐾</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  <span>WhatsApp: +7 (999) 999-99-99</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  <span>Telegram: @akdus_treats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@akdus.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Доставка</h4>
              <div className="space-y-2 text-gray-400">
                <p>По городу — 1-2 дня</p>
                <p>По России — СДЭК, Почта</p>
                <p>Самовывоз — бесплатно</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2024 Ак дус. Натуральные лакомства для собак.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 shadow-2xl bg-green-600 hover:bg-green-700 hover:scale-110 transition-all duration-300"
          onClick={openWhatsApp}
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
        <Button
          size="lg"
          className="rounded-full w-14 h-14 shadow-2xl bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300"
          onClick={openTelegram}
        >
          <Icon name="Send" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
