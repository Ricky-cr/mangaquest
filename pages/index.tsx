import { useEffect, useState } from 'react';
import MangaCard from '../components/MangaCard';

interface Manga {
  mal_id: number;
  title: string;
  synopsis: string;
  images: { jpg: { image_url: string } };
}

export default function Home() {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch top-manga da Jikan API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.jikan.moe/v4/top/manga');
        const data = await res.json();
        setMangaList(data.data.slice(0, 15)); // mostra i primi 15
      } catch (err) {
        console.error('Errore fetch:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // handler di utilità
  const add = (m: Manga, cat: string) => console.log(`[${cat}]`, m.title);
  const open = (id: number) => console.log('Open modal id:', id);

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-poppins text-mq-blue mb-6">
        Manga Popolari
      </h1>

      {loading ? (
        <p className="text-white">Caricamento…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-blue-500">
          {mangaList.map((manga) => (
            <div key={manga.mal_id} className="w-full min-w-0">
              {' '}
              {/* 👈 aggiunto */}
              <MangaCard
                title={manga.title}
                imageUrl={manga.images.jpg.image_url}
                synopsis={manga.synopsis || 'Nessuna descrizione disponibile.'}
                onOpenModal={() => open(manga.mal_id)}
                onAddToFavorites={() => add(manga, 'Preferiti')}
                onAddToReading={() => add(manga, 'In lettura')}
                onMarkAsRead={() => add(manga, 'Letto')}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
