import { useRef, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react';

const PRESET = ['/avatars/avatar1.png', '/avatars/avatar2.png', '/avatars/avatar3.png'];

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (src: string) => void;
}

export default function AvatarPickerModal({ open, onClose, onSelect }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [err, setErr]   = useState('');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setErr('Carica un’immagine'); return; }
    onSelect(URL.createObjectURL(file));
    onClose();
  };

  return (
    <Modal show={open} onClose={onClose}>
      <ModalHeader>Scegli un avatar</ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-3 gap-4">
          {PRESET.map(src => (
            <img
              key={src}
              src={src}
              className="h-20 w-20 rounded-full cursor-pointer hover:ring-2 hover:ring-mq-blue"
              onClick={() => { onSelect(src); onClose(); }}
            />
          ))}
        </div>
        {err && <p className="mt-3 text-sm text-red-500">{err}</p>}
      </ModalBody>
      <ModalFooter className="flex justify-between">
        <Button color="gray" onClick={onClose}>Annulla</Button>
        <Button onClick={() => fileRef.current?.click()}>Carica foto</Button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload}/>
      </ModalFooter>
    </Modal>
  );
}
