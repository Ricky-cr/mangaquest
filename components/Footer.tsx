export default function Footer() {

    return (
        <footer className = "bg-mq-dark text-white font-nunito py-6 mt-10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm"> &copy; {new Date().getFullYear()} Mangaquest. Tutti i diritti riservati</p>
                <p className="text-xs text-gray-400 mt-2"> Creato per gli amanti dei Manga</p>

            </div>

        </footer>
    )
}