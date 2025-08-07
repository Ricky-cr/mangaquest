import { useEffect, useState } from 'react'
import MangaCard from '../components/MangaCard'
import Modal from '../components/Modal'
import Banner from '../components/Banner'

interface MangaAPI {
  mal_id: number
  title: string
  synopsis: string
  chapters: number | null
  volumes: number | null
  status: string
  authors?: { name: string }[]
  images: { jpg: { image_url: string } }
}

export default function Home() {
  const [mangaList, setMangaList] = useState<MangaAPI[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  // modale
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState<MangaAPI | null>(null)

  /* fetch page generica */
  const fetchPage = async (pageNumber: number) => {
    const res = await fetch(`https://api.jikan.moe/v4/top/manga?page=${pageNumber}`)
    const json = await res.json()
    return {
      items: json.data as MangaAPI[],
      hasNext: json.pagination?.has_next_page ?? false,
    }
  }

  /* prima pagina */
  useEffect(() => {
    (async () => {
      try {
        const { items, hasNext } = await fetchPage(1)
        setMangaList(items.slice(0, 15))          // primi 15
        setHasMore(hasNext)
      } catch (err) {
        console.error('Errore fetch:', err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  /* load-more */
  const loadMore = async () => {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    try {
      const nextPage = page + 1
      const { items, hasNext } = await fetchPage(nextPage)
      setMangaList((prev) => [...prev, ...items])
      setPage(nextPage)
      setHasMore(hasNext)
    } catch (err) {
      console.error('Errore fetch (load more):', err)
    } finally {
      setLoadingMore(false)
    }
  }

  /* handlers modale */
  const openModal = (m: MangaAPI) => {
    setSelected(m)
    setModalOpen(true)
  }
  const add = (m: MangaAPI, c: string) => console.log(`[${c}]`, m.title)

  return (
    <>
    <Banner />
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-poppins text-mq-blue mb-6">Manga Popolari</h1>

      {/* griglia o spinner iniziale */}
      {loading ? (
        <p className="text-white">Caricamento…</p>
      ) : (
        <>
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

          {/* bottone Load-More */}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="px-6 py-2 rounded bg-mq-blue text-white disabled:opacity-50"
              >
                {loadingMore ? 'Caricamento…' : 'Carica altri'}
              </button>
            </div>
          )}
        </>
      )}

      {/* modale */}
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
    </>
  )
}
