import create from "zustand";

type BmiStore = {
  bmi: number;
  age: number;
  weight: number;
  height: number;
  setBmi: (bmi: number) => void;
  setAge: (age: number) => void;
  setWeight: (weight: number) => void;
  setHeight: (height: number) => void;
};

const useBmiStore = create<BmiStore>((set) => ({
  bmi: 0,
  age: 0,
  weight: 0,
  height: 0,
  setBmi: (bmi) => set({ bmi }),
  setAge: (age) => set({ age }),
  setWeight: (weight) => set({ weight }),
  setHeight: (height) => set({ height }),
}));

export default useBmiStore;
