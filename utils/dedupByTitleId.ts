/**
 * Rimuove duplicati con la stessa combinazione
 * “titolo normalizzato” + mal_id.
 */
export default function dedupByTitleId<
  T extends { mal_id: number; title: string }
>(arr: T[]): T[] {
  const seen = new Set<string>();
  return arr.filter((item) => {
    const key = `${item.title.trim().toLowerCase()}|${item.mal_id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
