import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MangaCard from '../components/MangaCard';
import Modal from '../components/Modal';   // usa la tua modale dettagli

interface Manga {
  mal_id: number;
  title: string;
  synopsis: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  authors?: { name: string }[];
  images: { jpg: { image_url: string } };
}

export default function SearchPage() {
  const { query } = useRouter();
  const q = (query.q as string) ?? '';

  const [list, setList] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState<Manga | null>(null);

  useEffect(() => {
    if (q.trim().length < 2) { setList([]); return; }
    setLoading(true);
    fetch(`https://api.jikan.moe/v4/manga?q=${q}&limit=24&sfw`)
      .then(r => r.json())
      .then(j => setList(j.data ?? []))
      .finally(() => setLoading(false));
  }, [q]);

  const add = (m:Manga,c:string)=>console.log(`[${c}]`,m.title);

  return (
    <main className="p-6 max-w-screen-2xl mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-mq-blue">
        Risultati per “{q}”
      </h1>

      {loading && <p className="text-white">Caricamento…</p>}
      {!loading && list.length===0 && <p className="text-gray-400">Nessun manga trovato.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(m => (
          <MangaCard
            key={m.mal_id}
            title={m.title}
            imageUrl={m.images.jpg.image_url}
            synopsis={m.synopsis || 'Nessuna descrizione.'}
            onOpenModal={() => setSelected(m)}
            onAddToFavorites={() => add(m,'Preferiti')}
            onAddToReading={() => add(m,'In lettura')}
            onMarkAsRead={() => add(m,'Letto')}
          />
        ))}
      </div>

      {selected && (
        <Modal
          show={true}
          onClose={()=>setSelected(null)}
          manga={{
            title:selected.title,
            image:selected.images.jpg.image_url,
            author:selected.authors?.[0]?.name ?? 'Sconosciuto',
            chapters:selected.chapters,
            volumes:selected.volumes,
            status:selected.status,
            synopsis:selected.synopsis,
          }}
          onFavorite={()=>add(selected,'Preferiti')}
          onReading={()=>add(selected,'In lettura')}
          onRead={()=>add(selected,'Letto')}
        />
      )}
    </main>
  );
}
