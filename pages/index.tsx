import { useEffect, useState } from "react";
import Modal from "../components/Modal";

interface Manga {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  synopsis?: string;
}

export default function Home() {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOopen, setIsModalOpen] = useState(false);
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);

  // Funzione per aprire Modale
  const openModal = (manga: Manga) => {
    setSelectedManga(manga);
    setIsModalOpen(true);
  };

  // Funzione per chiudere Modale
  const closeModal = () => {
    setSelectedManga(null);
    setIsModalOpen(false);
  };

  // Funzione per recuperare i dati dei manga
  // Utilizza l'API Jikan per ottenere i manga popolari
  // Gestisce gli errori e lo stato di caricamento

  const fetchManga = async () => {
    try {
      const res = await fetch("https://api.jikan.moe/v4/manga");
      const data = await res.json();
      setMangaList(data.data);
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect -> esegue fetchManga al caricamento del componente
  useEffect(() => {
    fetchManga();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-poppins text-mq-blue mb-6">
        {" "}
        Manga Popolari{" "}
      </h1>
      {loading ? (
        <p className="text-white"> Caricamento... </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {mangaList.map((manga) => (
            <div
              key={manga.mal_id}
              className="bg-mq-dark rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={manga.images.jpg.image_url}
                alt={manga.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-mplus text-white">
                  {" "}
                  {manga.title}{" "}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
