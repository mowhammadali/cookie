import { create } from "zustand";

type SidebarStatesType = {
  isOpen: boolean;
  toggle: () => void;
};

export const useSidebarStore = create<SidebarStatesType>((set) => ({
  isOpen: true,

  toggle: (): void =>
    set((state: Pick<SidebarStatesType, "isOpen">) => ({
      isOpen: !state.isOpen,
    })),
}));
