interface ModalProps {
  isOpen: boolean
  onClose: () => void
  mangaId: number | null
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-6 rounded shadow-lg max-w-sm relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-2">Modale di Test</h2>
        <p>Ora la modale ha contenuto chiaro e leggibile!</p>
      </div>
    </div>
  )
}
