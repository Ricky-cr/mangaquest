import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'flowbite-react';
import { FaHeart, FaBookOpen, FaCheck } from 'react-icons/fa';

interface Props {
  show: boolean;
  onClose: () => void;
  manga: {
    title: string;
    image: string;
    author: string;
    chapters: number | null;
    volumes: number | null;
    status: string;
    synopsis: string;
  };
  // handler per i bottoni
  onFavorite: () => void;
  onReading: () => void;
  onRead: () => void;
}

export default function MangaModal({
  show,
  onClose,
  manga,
  onFavorite,
  onReading,
  onRead,
}: Props) {
  return (
    <Modal show={show} size="4xl" onClose={onClose}>
      <ModalHeader className="text-lg">{manga.title}</ModalHeader>

      <ModalBody>
        {/* GRID 3 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ───── Colonna 1 ───── */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={manga.image}
              alt={manga.title}
              className="w-[180px] h-[260px] object-cover rounded-md mb-4"
            />

            <ul className="text-sm text-gray-700 dark:text-gray-400 space-y-1">
              <li>
                <span className="font-semibold">Autore:</span> {manga.author}
              </li>
              <li>
                <span className="font-semibold">Capitoli:</span>{' '}
                {manga.chapters ?? 'N/D'}
              </li>
              <li>
                <span className="font-semibold">Volumi:</span>{' '}
                {manga.volumes ?? 'N/D'}
              </li>
              <li>
                <span className="font-semibold">Stato:</span> {manga.status}
              </li>
            </ul>
          </div>

          {/* ───── Colonna 2 (sinossi) ───── */}
          <div className="md:col-span-1 text-sm leading-relaxed text-gray-800 dark:text-gray-300">
            {manga.synopsis}
          </div>

          {/* ───── Colonna 3 (azioni) ───── */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <button
              onClick={onFavorite}
              className="flex flex-col items-center text-mq-gold"
              title="Preferiti"
            >
              <FaHeart size={20} />
              <span className="text-xs mt-1">Preferiti</span>
            </button>

            <button
              onClick={onReading}
              className="flex flex-col items-center text-mq-blue"
              title="In lettura"
            >
              <FaBookOpen size={20} />
              <span className="text-xs mt-1">In lettura</span>
            </button>

            <button
              onClick={onRead}
              className="flex flex-col items-center text-green-400"
              title="Letto"
            >
              <FaCheck size={20} />
              <span className="text-xs mt-1">Letto</span>
            </button>
          </div>
        </div>
      </ModalBody>

      {/* Footer opzionale */}
      <ModalFooter>
        <Button color="gray" onClick={onClose}>
          Chiudi
        </Button>
      </ModalFooter>
    </Modal>
  );
}
