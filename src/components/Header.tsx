const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/b2049077-307d-4da6-b500-e5fba1c9e82e.png"
            alt="Medall Lab"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-foreground leading-tight tracking-wide">MEDALL LAB</p>
            <p className="text-xs text-muted-foreground leading-tight">Цифровая зуботехническая лаборатория</p>
          </div>
        </div>

        <a
          href="tel:+79215760336"
          className="hidden sm:block px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-sm font-medium"
        >
          +7 921 576-03-36
        </a>
      </div>
    </header>
  );
};

export default Header;
