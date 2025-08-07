import { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import MangaCard from '../components/MangaCard'

interface Manga {
  mal_id: number
  title: string
  synopsis: string
  images: {
    jpg: {
      image_url: string
    }
  }
}

export default function Home() {
  const [mangaList, setMangaList] = useState<Manga[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMangaId, setSelectedMangaId] = useState<number | null>(null)

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const res = await fetch('https://api.jikan.moe/v4/top/manga')
        const data = await res.json()
        setMangaList(data.data.slice(0, 15))
      } catch (error) {
        console.error('Errore nel recupero dati:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchManga()
  }, [])

  const openModal = (id: number) => {
    setSelectedMangaId(id)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedMangaId(null)
    setIsModalOpen(false)
  }

  const handleAdd = (manga: Manga, categoria: string) => {
    console.log(`[${categoria}]`, manga.title)
  }

  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-3xl font-poppins text-mq-blue mb-6">Manga Popolari</h1>

      {loading ? (
        <p className="text-white">Caricamento...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 rounded-md">
          {mangaList.map((manga) => (
            <div key={manga.mal_id} className="w-full">
              <MangaCard
                title={manga.title}
                imageUrl={manga.images.jpg.image_url}
                synopsis={manga.synopsis || 'Nessuna descrizione disponibile.'}
                onOpenModal={() => openModal(manga.mal_id)}
                onAddToFavorites={() => handleAdd(manga, 'Preferiti')}
                onAddToReading={() => handleAdd(manga, 'In lettura')}
                onMarkAsRead={() => handleAdd(manga, 'Letto')}
              />
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mangaId={selectedMangaId}
      />
    </div>
  )
}
