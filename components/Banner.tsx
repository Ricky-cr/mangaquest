import { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';
import dedupByTitleId from '../utils/dedupByTitleId';   // 👈

interface Slide {
  mal_id: number;
  title: string;
  images: { jpg: { image_url: string } };
}

export default function Banner() {
  const [items, setItems] = useState<Slide[]>([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/manga?order_by=scored&limit=6')
      .then(r => r.json())
      .then(j => setItems(dedupByTitleId<Slide>(j.data ?? [])));  // ✅
  }, []);

  if (!items.length) return null;

  return (
    <div className="w-full h-[220px] overflow-hidden bg-gray-900">
      <Carousel slide={false} pauseOnHover className="h-full">
        {items.map(s => (
          <div key={s.mal_id}
               className="relative h-full cursor-pointer"
               onClick={() => window.location.href=`/manga/${s.mal_id}`}>
            <img src={s.images.jpg.image_url}
                 className="w-full h-full object-cover opacity-60" />
            <span className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow">
              {s.title}
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
