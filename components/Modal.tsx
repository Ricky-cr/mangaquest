import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  manga: any; //
}

export default function Modal({ isOpen, onClose, manga }: ModalProps) {
  if (!isOpen || !manga) return null; // Non mostrare nulla se chiusa o senza dati

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* Contenitore Modale */}
      <div className="bg-mq-dark rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        {/* Pulsante Chiudi */}
        <button
          className="absolute top-3 right-3 text-white text-2xl"
          onClick={onClose}>
            ✖
        </button>

        {/* Immagine copertina */}
        <img
          src={manga.images.jpg.image_url}
          alt={manga.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        {/* Titolo */}
        <h2 className="mt-4 text-2xl font-mplus text-mq-gold">{manga.title}</h2>

        {/* Descrizione */}
        <p className="mt-2 text-white text-sm"> {manga.synopsis}</p>
      </div>
    </div>
  );
}
