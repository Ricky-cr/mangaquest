import Layout from "../components/layout/Layout";
import UIKitPage from "./ui-kit/page";

export default function HomePage() {
  return (
    <>
    <Layout>
      <section className="py-10 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Benvenuto su MangaQuest
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Questa è la homepage di test. Se vedi correttamente la Navbar in alto e
          il Footer in basso, la struttura di base è funzionante.
        </p>
      </section>
    </Layout>
    <UIKitPage/>
    </>
  )
}
