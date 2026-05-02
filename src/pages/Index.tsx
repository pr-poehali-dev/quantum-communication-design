import ArcGalleryHero from "@/components/ArcGalleryHero";
import Portfolio from "@/components/Portfolio";
import PriceList from "@/components/PriceList";
import Contacts from "@/components/Contacts";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/1442c2c8-cddb-440f-a3a9-6266ecf2c58d.JPG",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/675650d6-722d-4056-9eac-c2d7e76b56da.JPG",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/d8e5d2bd-698c-4bb4-b337-503d557a6054.JPG",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/fd64fdd1-ab37-4a82-87d7-714c955829e8.JPG",
    "https://cdn.poehali.dev/projects/74144a3b-fae0-4f29-bf2f-82a5b4768023/bucket/027b2520-c653-4728-b84f-26cd1cdbaff5.JPG",
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
      <Portfolio />
      <PriceList />
      <Contacts />
    </main>
  );
};

export default Index;