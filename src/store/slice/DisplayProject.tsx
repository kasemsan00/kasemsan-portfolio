import { create, SetState } from "zustand";

interface DisplayProjectState {
  display: boolean;
  setDisplay: (arg0: boolean) => void;
}

export const useDisplayStore = create<DisplayProjectState>(
  (set: SetState<DisplayProjectState>) => ({
    display: false,
    setDisplay: (value) => set((state) => ({ display: value })),
  })
);
