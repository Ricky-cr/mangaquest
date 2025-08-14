import { useEffect, useState } from 'react';
import MangaCard from '../components/MangaCard';
import MangaModal from '../components/MangaModal';
import Banner from '../components/Banner';
import dedupByTitleId from '../utils/dedupByTitleId';   // 👈 nuovo helper

interface Manga {
  mal_id: number;
  title: string;
  synopsis: string;
  chapters: number | null;
  volumes : number | null;
  images  : { jpg: { image_url: string } };
}

const PAGE_SIZE = 15;

export default function Home() {
  const [list, setList] = useState<Manga[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selected, setSelected] = useState<Manga | null>(null);

  async function fetchPage(p: number) {
    const url = `https://api.jikan.moe/v4/top/manga?page=${p}&limit=${PAGE_SIZE}`;
    const j   = await (await fetch(url)).json();
    return {
      items  : dedupByTitleId<Manga>(j.data ?? []),
      hasNext: j.pagination?.has_next_page,
    };
  }

  useEffect(() => {
    fetchPage(1)
      .then(({ items, hasNext }) => { setList(items); setHasMore(hasNext); })
      .finally(() => setLoading(false));
  }, []);

  const loadMore = async () => {
    if (!hasMore || loadingMore) return;
    setLoadingMore(true);
    try {
      const next = page + 1;
      const { items, hasNext } = await fetchPage(next);
      setList(prev => dedupByTitleId<Manga>([...prev, ...items]));
      setPage(next); setHasMore(hasNext);
    } finally { setLoadingMore(false); }
  };

  const add = (m:Manga,c:string)=>console.log(`[${c}]`, m.title);

  return (
    <>
      <Banner />

      <main className="p-6 max-w-screen-2xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-mq-blue">Manga Popolari</h1>

        {loading && <p className="text-white">Caricamento…</p>}

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

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="px-4 py-2 rounded bg-mq-blue hover:bg-mq-gold disabled:opacity-50"
            >
              {loadingMore ? 'Caricamento…' : 'Carica altri'}
            </button>
          </div>
        )}

        {selected && (
          <MangaModal
            show
            onClose={() => setSelected(null)}
            manga={{
              title: selected.title,
              image: selected.images.jpg.image_url,
              author: 'Autore sconosciuto',
              chapters: selected.chapters,
              volumes: selected.volumes,
              status: '',
              synopsis: selected.synopsis,
            }}
            onFavorite={() => add(selected,'Preferiti')}
            onReading={() => add(selected,'In lettura')}
            onRead={() => add(selected,'Letto')}
          />
        )}
      </main>
    </>
  );
}
