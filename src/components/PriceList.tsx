import { useState } from "react";

type PriceItem = {
  code: string;
  name: string;
  note?: string;
  price?: string;
  subItems?: { label: string; price?: string }[];
};

type Category = {
  id: number;
  title: string;
  items: PriceItem[];
};

const categories: Category[] = [
  {
    id: 1,
    title: "Коронки из Zirconia (ZrO₂)",
    items: [
      { code: "1.1", name: "Коронка из ZrO₂ в полную анатомию" },
      { code: "1.2", name: "Коронка из ZrO₂ с нанесением керамики" },
      { code: "1.3", name: "Коронка из ZrO₂ на винтовой фиксации", note: "без учёта титанового основания" },
      { code: "1.4", name: "Коронка из ZrO₂ на винтовой фиксации с нанесением керамики", note: "без учёта титанового основания" },
      { code: "1.5", name: "Коронка из ZrO₂ на индивидуальном абатменте", note: "без стоимости абатмента, без учёта титанового основания" },
    ],
  },
  {
    id: 2,
    title: "Коронки и виниры E-max",
    items: [
      { code: "2.1", name: "Коронка, винир E-max полная анатомия" },
      { code: "2.2", name: "Коронка, винир E-max с нанесением керамики" },
      { code: "2.3", name: "Коронка E-max на индивидуальный ZrO₂ абатмент" },
      { code: "2.4", name: "Микропротезирование E-max (inlay, onlay, overlay)" },
      { code: "2.5", name: "Коронка, винир E-max CAD-CAM полная анатомия" },
      { code: "2.6", name: "Коронка, винир E-max CAD-CAM с нанесением керамики" },
    ],
  },
  {
    id: 3,
    title: "Протезы All-on-4/6",
    items: [
      { code: "3.1", name: "Постоянное композитное All-on-4/6 на цельнофрезерованной титановой балке" },
      { code: "3.2", name: "Постоянное ZrO₂ All-on-4/6 на цельнофрезерованной титановой балке" },
      { code: "3.3", name: "Постоянное керамокомпозитное All-on-4/6 на цельнофрезерованной титановой балке" },
      { code: "3.4", name: "Постоянный протез All-on-4/6 из ZrO₂ в полную анатомию без армирования" },
      { code: "3.5", name: "Постоянный протез All-on-4/6 из ZrO₂ с нанесением керамики без армирования" },
    ],
  },
  {
    id: 4,
    title: "Временные конструкции",
    items: [
      { code: "4.1", name: "Коронка временная" },
      { code: "4.2", name: "Коронка временная на винтовой фиксации", note: "без учёта титанового основания" },
      { code: "4.3", name: "Коронка ПММА длительного ношения" },
      { code: "4.4", name: "Коронка ПММА длительного ношения на винтовой фиксации", note: "без учёта титанового основания" },
      { code: "4.5", name: "Временный All-on-4 ПММА протез на цельнофрезерованной титановой балке" },
      { code: "4.6", name: "Временный All-on-4/6 протез на трибарах/сварке с гарнитурными зубами" },
      {
        code: "4.7",
        name: "Временный All-on-4 протез из цельнофрезерованной ПММА", note: "без учёта винтов",
        subItems: [{ label: "Опора" }, { label: "Промежуточная часть" }],
      },
    ],
  },
  {
    id: 5,
    title: "Композитные коронки",
    items: [
      { code: "5.1", name: "Коронка композитная фрезерованная" },
      { code: "5.2", name: "Коронка композитная на винтовой фиксации", note: "без учёта титанового основания" },
      { code: "5.3", name: "Коронка композитная, 3D-печать" },
      { code: "5.4", name: "Коронка композитная на винтовой фиксации, 3D-печать", note: "без учёта титанового основания" },
      { code: "5.5", name: "Анатомическая композитная накладка на препарированный зуб (3D-печать)" },
    ],
  },
  {
    id: 6,
    title: "Каппы",
    items: [
      { code: "6.1", name: "Каппа отбеливающая", note: "включая модель" },
      { code: "6.2", name: "Каппа ретенционная" },
      { code: "6.3", name: "Каппа защитная" },
      { code: "6.4", name: "Каппа с замещением дефекта", note: "до 2-х зубов" },
      { code: "6.5", name: "Дополнительный зуб в каппу" },
    ],
  },
  {
    id: 7,
    title: "Хирургические шаблоны",
    items: [
      { code: "7.1", name: "Хирургический шаблон (до 2-х имплантов)" },
      { code: "7.2", name: "Хирургический шаблон (от 3-х до 5-ти имплантов)" },
      { code: "7.3", name: "Хирургический шаблон All-on-4" },
      { code: "7.4", name: "Хирургический шаблон All-on-6" },
      { code: "7.5", name: "Хирургический шаблон, печать на 3D-принтере" },
      { code: "7.6", name: "Хирургический шаблон для гингивопластики" },
      { code: "7.7", name: "Шаблон под пины" },
      { code: "7.8", name: "Втулка (за 1 единицу)" },
      { code: "7.9", name: "Рентгено-контрастный шаблон" },
    ],
  },
  {
    id: 8,
    title: "Прочие работы",
    items: [
      { code: "8.1", name: "Wax-up (1 ед.)" },
      { code: "8.2", name: "Диагностическая модель принтованная" },
      { code: "8.3", name: "Индивидуальная ложка" },
      { code: "8.4", name: "Силиконовый ключ, сегмент" },
      { code: "8.5", name: "Силиконовый ключ, вся челюсть" },
      { code: "8.6", name: "Индивидуальный циркониевый абатмент" },
      { code: "8.7", name: "Индивидуальный титановый абатмент" },
      { code: "8.8", name: "Керамическая десна (за единицу)" },
      {
        code: "8.9",
        name: "Титановый каркас",
        subItems: [{ label: "Опорная часть" }, { label: "Промежуточная часть" }],
      },
      { code: "8.10", name: "Сплинт" },
    ],
  },
  {
    id: 9,
    title: "Титановые основания и расходники",
    items: [
      { code: "9.1", name: "Титановое основание Ортос" },
      { code: "9.2", name: "Титановое основание Ультрастом" },
      { code: "9.3", name: "Титановое основание GEO" },
      { code: "9.4", name: "Конические винты Ультрастом" },
    ],
  },
];

const PriceList = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  return (
    <section id="price" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Прайс-лист</h2>
          <p className="text-muted-foreground text-lg">Цены уточняйте у менеджера — они будут добавлены в ближайшее время</p>
        </div>

        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat.id} className="border border-border rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-accent transition-colors"
                onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
              >
                <span className="font-semibold text-foreground text-base">
                  <span className="text-muted-foreground mr-2 text-sm">{cat.id}.</span>
                  {cat.title}
                </span>
                <span className="text-muted-foreground text-lg ml-4">
                  {openCategory === cat.id ? "−" : "+"}
                </span>
              </button>

              {openCategory === cat.id && (
                <div className="border-t border-border">
                  {cat.items.map((item) => (
                    <div key={item.code} className="px-6 py-3 border-b border-border/50 last:border-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-2">
                            <span className="text-muted-foreground text-sm min-w-[2.5rem] pt-0.5">{item.code}</span>
                            <div>
                              <span className="text-foreground text-sm">{item.name}</span>
                              {item.note && (
                                <p className="text-muted-foreground text-xs mt-0.5">{item.note}</p>
                              )}
                              {item.subItems && (
                                <div className="mt-1 space-y-1">
                                  {item.subItems.map((sub, idx) => (
                                    <div key={idx} className="flex justify-between text-xs text-muted-foreground">
                                      <span>— {sub.label}</span>
                                      <span className="ml-8">{sub.price ?? "по запросу"}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {!item.subItems && (
                          <span className="text-muted-foreground text-sm whitespace-nowrap">
                            {item.price ?? "по запросу"}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:a.luzyakov@yandex.ru?subject=Запрос прайса&body=Здравствуйте! Хочу узнать актуальные цены."
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Получить актуальный прайс
          </a>
        </div>
      </div>
    </section>
  );
};

export default PriceList;