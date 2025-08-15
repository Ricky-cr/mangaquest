'use client'

import { useState } from 'react'
import { Button, Modal, Dropdown, ModalBody, ModalHeader, ModalFooter, DropdownDivider, DropdownItem } from 'flowbite-react'

export default function UIKitPage() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <section className="space-y-8 p-6">
      <header>
        <h1 className="text-3xl font-bold text-primary">UI Kit — Flowbite React</h1>
        <p className="text-muted">Pagina di test per componenti Flowbite React integrati con Tailwind.</p>
      </header>

      {/* Button demo */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button color="gray">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="failure">Failure</Button>
          
        </div>
      </div>

      {/* Modal demo */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Modal</h2>
        <Button onClick={() => setOpenModal(true)}>Apri Modal</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Modal di test</ModalHeader>
          <ModalBody>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Questo è un contenuto di esempio dentro la modal.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>Chiudi</Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* Dropdown demo */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dropdown</h2>
        <Dropdown label="Azioni">
          <DropdownItem>Preferito</DropdownItem>
          <DropdownItem>Aggiungi a wishlist</DropdownItem>
          <DropdownDivider />
          <DropdownItem disabled>Altra azione (disabilitata)</DropdownItem>
        </Dropdown>
      </div>
    </section>
  )
}
