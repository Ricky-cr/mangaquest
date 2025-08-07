interface MangaCardProps {
  title: string
  imageUrl: string
  synopsis: string
  onOpenModal: () => void
  onAddToFavorites: () => void
  onAddToReading: () => void
  onMarkAsRead: () => void
}

export default function MangaCard({
  title,
  imageUrl,
  synopsis,
  onOpenModal,
  onAddToFavorites,
  onAddToReading,
  onMarkAsRead,
}: MangaCardProps) {
  return (
    <div className="flex flex-row w-full h-[180px] bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden">
      <div className="w-[100px] h-full flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between p-3 overflow-hidden w-full">
        <div>
          <h5 className="text-sm font-bold text-gray-900 dark:text-white truncate">
            {title}
          </h5>
          <p className="text-xs text-gray-700 dark:text-gray-400 line-clamp-3">
            {synopsis.length > 120 ? synopsis.slice(0, 120) + '...' : synopsis}
            <button
              onClick={onOpenModal}
              className="ml-1 text-xs text-mq-blue underline hover:text-mq-gold"
            >
              Leggi di più
            </button>
          </p>
        </div>

        <div className="flex gap-3 mt-3">
          <button onClick={onAddToFavorites} className="text-mq-gold" title="Preferiti">★</button>
          <button onClick={onAddToReading} className="text-mq-blue" title="In lettura">📖</button>
          <button onClick={onMarkAsRead} className="text-green-400" title="Letto">✔️</button>
        </div>
      </div>
    </div>
  )
}
