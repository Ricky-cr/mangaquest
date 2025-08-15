export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur sticky top-0 z-50 px-4 py-3">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <a className="text-primary font-semibold tracking-wide">MangaQuest</a>
        <div className="flex gap-4">
          <a className="hover:text-accent">Browse</a>
          <a className="hover:text-accent">Library</a>
        </div>
      </div>
    </nav>
  );
}
