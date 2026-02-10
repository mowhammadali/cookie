import { create } from "zustand";

type ModalStatesType = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const useModalStore = create<ModalStatesType>((set) => ({
  isOpen: false,

  close: (): void => set({ isOpen: false }),
  open: (): void => set({ isOpen: true }),
}));
