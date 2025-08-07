// pages/index.tsx
import { useEffect, useState } from 'react';
import MangaCard from '../components/MangaCard';
import Modal from '../components/Modal';

/** Tipi minimi per i dati che ci servono */
interface MangaAPI {
  mal_id: number;
  title: string;
  synopsis: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  authors?: { name: string }[];
  images: { jpg: { image_url: string } };
}

export default function Home() {
  const [mangaList, setMangaList] = useState<MangaAPI[]>([]);
  const [loading, setLoading] = useState(true);

  // stato per la modale
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<MangaAPI | null>(null);

  /** Fetch iniziale */
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.jikan.moe/v4/top/manga');
        const data = await res.json();
        setMangaList(data.data.slice(0, 15));
      } catch (err) {
        console.error('Errore fetch:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  /** Handlers */
  const openModal = (manga: MangaAPI) => {
    setSelected(manga);
    setModalOpen(true);
  };

  const add = (m: MangaAPI, c: string) => console.log(`[${c}]`, m.title);

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-poppins text-mq-blue mb-6">
        Manga Popolari
      </h1>

      {loading ? (
        <p className="text-white">Caricamento…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mangaList.map((manga) => (
            <MangaCard
              key={manga.mal_id}
              title={manga.title}
              imageUrl={manga.images.jpg.image_url}
              synopsis={manga.synopsis || 'Nessuna descrizione disponibile.'}
              onOpenModal={() => openModal(manga)}
              onAddToFavorites={() => add(manga, 'Preferiti')}
              onAddToReading={() => add(manga, 'In lettura')}
              onMarkAsRead={() => add(manga, 'Letto')}
            />
          ))}
        </div>
      )}

      {/* ─────────── Modale dettagli ─────────── */}
      {selected && (
        <Modal
          show={modalOpen}
          onClose={() => setModalOpen(false)}
          manga={{
            title: selected.title,
            image: selected.images.jpg.image_url,
            author: selected.authors?.[0]?.name ?? 'Sconosciuto',
            chapters: selected.chapters,
            volumes: selected.volumes,
            status: selected.status,
            synopsis: selected.synopsis,
          }}
          onFavorite={() => add(selected, 'Preferiti')}
          onReading={() => add(selected, 'In lettura')}
          onRead={() => add(selected, 'Letto')}
        />
      )}
    </div>
  );
}
