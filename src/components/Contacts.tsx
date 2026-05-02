import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Контакты</h2>
          <p className="text-muted-foreground text-lg">Свяжитесь с нами — ответим на все вопросы</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <a
            href="tel:+79215760336"
            className="flex items-center gap-4 p-6 rounded-2xl border border-border hover:bg-accent transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon name="Phone" size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-0.5">Телефон</p>
              <p className="font-semibold text-foreground text-lg">+7 921 576-03-36</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Icon name="MapPin" size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-0.5">Адрес</p>
              <p className="font-semibold text-foreground text-lg">Левашовский пр., 24</p>
              <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+79215760336"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center font-medium"
          >
            Позвонить
          </a>
          <a
            href="mailto:a.luzyakov@yandex.ru?subject=Заявка с сайта&body=Здравствуйте! Хочу оставить заявку."
            className="px-8 py-3 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 text-center font-medium"
          >
            Написать на email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
