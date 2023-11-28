import create from "zustand";

type BmiStore = {
  bmi: number;
  category: string;
  setBmi: (bmi: number) => void;
  setCategory: (category: string) => void;
};

const useBmiStore = create<BmiStore>((set) => ({
  bmi: 0,
  category: "",
  setBmi: (bmi) => set({ bmi }),
  setCategory: (category) => set({ category }),
}));

export default useBmiStore;
