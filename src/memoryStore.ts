interface RateLimitEntry {
  count: number;
  timestamp: number;
}

const store = new Map<string, RateLimitEntry>();

export default {
  get(key: string): RateLimitEntry | undefined {
    return store.get(key);
  },

  set(key: string, entry: RateLimitEntry): void {
    store.set(key, entry);
  },

  clear(): void {
    store.clear();
  }
};
