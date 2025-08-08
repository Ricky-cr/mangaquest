/**
 * Rimuove i duplicati (stesso mal_id) mantenendo
 * la prima occorrenza.
 */
export default function dedupById<T extends { mal_id: number }>(arr: T[]): T[] {
  const seen = new Set<number>();
  return arr.filter(m => (seen.has(m.mal_id) ? false : (seen.add(m.mal_id), true)));
}
