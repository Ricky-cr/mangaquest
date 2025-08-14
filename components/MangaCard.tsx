import { Card } from 'flowbite-react';
import { FaHeart, FaBookOpen, FaCheck } from 'react-icons/fa';

interface Props {
  title: string;
  imageUrl: string;
  synopsis: string;
  onOpenModal: () => void;
  onAddToFavorites: () => void;
  onAddToReading: () => void;
  onMarkAsRead: () => void;
}

export default function MangaCard({
  title,
  imageUrl,
  synopsis,
  onOpenModal,
  onAddToFavorites,
  onAddToReading,
  onMarkAsRead,
}: Props) {
  return (
    <Card className="w-full border-green-500">
      {/* layout personalizzato */}
      <div className="flex">
        {/* immagine: 100 × 100 px fissi */}
        <img
          src={imageUrl}
          alt={title}
          className="w-[100px] h-[150px] object-cover flex-shrink-0 rounded-md border-yellow-400"
        />

        {/* testo + bottoni */}
        <div className="flex flex-col justify-between pl-4 flex-1">
          <div>
            <h5 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h5>
            <p className="text-xs text-gray-700 dark:text-gray-400">
              {synopsis.length > 120 ? synopsis.slice(0, 120) + '…' : synopsis}
              <button
                onClick={onOpenModal}
                className="ml-1 text-xs text-mq-blue underline hover:text-mq-gold"
              >
                Leggi di più
              </button>
            </p>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={onAddToFavorites}
              className="text-mq-gold"
              title="Preferiti"
            >
              <FaHeart size={14} />
            </button>
            <button
              onClick={onAddToReading}
              className="text-mq-blue"
              title="In lettura"
            >
              <FaBookOpen size={14} />
            </button>
            <button
              onClick={onMarkAsRead}
              className="text-green-400"
              title="Letto"
            >
              <FaCheck size={14} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
