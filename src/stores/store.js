import create from "zustand";

const useStore = create((set) => ({
  query: "",
  setQuery: (query) => set((state) => ({ query })),
}));

export default useStore;
