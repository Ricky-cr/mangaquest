'use client'

import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'flowbite-react'

export default function UIKitPage() {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-6 p-6">
      {/* test Tailwind */}
      <div className="h-2 w-full bg-red-500" />

      <h2 className="text-xl font-semibold">Button</h2>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button color="gray">Secondary</Button>
        <Button color="warning">Warning</Button>
      </div>

      <h2 className="text-xl font-semibold">Modal</h2>
      <Button onClick={() => setOpen(true)}>Apri Modal</Button>
      <Modal show={open} onClose={() => setOpen(false)}>
        <ModalHeader>Titolo</ModalHeader>
        <ModalBody>Contenuto della modal…</ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Chiudi</Button>
        </ModalFooter>
      </Modal>
    </section>
  )
}
