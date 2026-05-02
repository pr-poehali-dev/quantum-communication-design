import { useState } from "react";

const works = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/1442c2c8-cddb-440f-a3a9-6266ecf2c58d.JPG",
    title: "Коронки ZrO₂",
    desc: "Полный комплект коронок и отдельные единицы",
  },
  {
    id: 2,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/675650d6-722d-4056-9eac-c2d7e76b56da.JPG",
    title: "Виниры E-max",
    desc: "Керамические виниры верхней и нижней челюсти",
  },
  {
    id: 3,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/ad20b636-3d52-4be2-9128-6c3eface8f22.JPG",
    title: "Коронки на имплантах",
    desc: "Коронки на винтовой фиксации, совместимость AnyOne",
  },
  {
    id: 4,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/46fa029c-73ce-40ce-ad04-a6b0ada88b70.JPG",
    title: "Коронки MegaGen",
    desc: "Работы на имплантах MegaGen Russia",
  },
  {
    id: 5,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/13d3b4bd-317d-461e-9677-b26308769a71.JPG",
    title: "All-on протезы",
    desc: "Этапы изготовления: от модели до готового протеза",
  },
  {
    id: 6,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/0a583f97-4a4e-4822-9de4-7a0d07724f7a.JPG",
    title: "Титановые балки",
    desc: "Цельнофрезерованные титановые конструкции Titan + ZrO₂",
  },
  {
    id: 7,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/04f0feb2-fa50-4c9d-a3f8-af7c6465d733.JPG",
    title: "All-on-4/6 комплекс",
    desc: "Полное протезирование на имплантах с артикулятором",
  },
  {
    id: 8,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/d8e5d2bd-698c-4bb4-b337-503d557a6054.JPG",
    title: "Контроль формы",
    desc: "Контроль формы при наслоении керамики",
  },
  {
    id: 9,
    src: "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/fd64fdd1-ab37-4a82-87d7-714c955829e8.JPG",
    title: "CAD/CAM фрезеровка",
    desc: "Фрезерование циркония на оборудовании Ziceram",
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Примеры работ</h2>
          <p className="text-muted-foreground text-lg">Реальные работы нашей лаборатории</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-video"
              onClick={() => setSelected(work.id)}
            >
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{work.title}</p>
                <p className="text-white/80 text-xs mt-0.5">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl leading-none"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              src={works.find((w) => w.id === selected)?.src}
              alt=""
              className="w-full rounded-2xl shadow-2xl"
              draggable={false}
            />
            <div className="mt-3 text-center">
              <p className="text-white font-semibold">{works.find((w) => w.id === selected)?.title}</p>
              <p className="text-white/60 text-sm">{works.find((w) => w.id === selected)?.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
