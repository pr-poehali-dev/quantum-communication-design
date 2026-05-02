import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Cpu",
    title: "Цифровые технологии",
    desc: "Полный цикл CAD/CAM фрезеровки и 3D-печати. Работаем с материалами мировых брендов: Ziceram, E-max, PMMA.",
  },
  {
    icon: "Shield",
    title: "Точность и надёжность",
    desc: "Каждая конструкция проходит многоэтапный контроль качества. Отклонение не более 20 микрон.",
  },
  {
    icon: "Clock",
    title: "Чёткие сроки",
    desc: "Соблюдаем договорённости. Одиночные коронки — от 3 рабочих дней, сложные конструкции — по согласованию.",
  },
  {
    icon: "Layers",
    title: "Полный спектр работ",
    desc: "Коронки, виниры, мостовидные протезы, All-on-4/6, хирургические шаблоны, временные конструкции.",
  },
  {
    icon: "Users",
    title: "Работаем с клиниками",
    desc: "Надёжный партнёр для стоматологических клиник Санкт-Петербурга. Индивидуальный подход к каждому заказу.",
  },
  {
    icon: "Award",
    title: "Опыт и экспертиза",
    desc: "Многолетний опыт изготовления ортопедических конструкций. Постоянное повышение квалификации команды.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">О нас</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Medall Lab — лаборатория нового поколения
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Мы — цифровая зуботехническая лаборатория в Санкт-Петербурге, специализирующаяся на изготовлении ортопедических конструкций с использованием передовых технологий CAD/CAM и 3D-печати.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Наша задача — дать стоматологам надёжного партнёра, который выполняет работу точно в срок и с предсказуемым высоким качеством. Мы работаем только с сертифицированными материалами и современным оборудованием.
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-1">работ в месяц</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">20 мкм</p>
                <p className="text-sm text-muted-foreground mt-1">точность фрезеровки</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">от 3 дней</p>
                <p className="text-sm text-muted-foreground mt-1">срок изготовления</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/fd64fdd1-ab37-4a82-87d7-714c955829e8.JPG"
              alt="Лаборатория"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">Левашовский пр., 24</p>
              <p className="text-white/70 text-sm">Санкт-Петербург</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center text-primary font-medium text-sm uppercase tracking-widest mb-3">Почему мы</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Наши преимущества</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={22} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;