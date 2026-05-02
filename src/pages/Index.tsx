import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/files/5081b0b7-9d18-477a-891f-3bfbc640e553.jpg",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/files/a5c9c122-be78-48a8-892b-41079b3f175c.jpg",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/files/de7c4734-a9ac-4e2f-8ac6-2d5f5e722a5a.jpg",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/files/601b7e54-5ba0-4d26-b52d-763c269087aa.jpg",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/files/e00e804a-0a1c-4405-b11e-acd227a9b454.jpg",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/files/0e368708-6f5c-4e55-a6d1-bb4e1716bd60.jpg",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/files/3e9ef916-84a5-4a7e-93b1-b44ff5528f4d.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;