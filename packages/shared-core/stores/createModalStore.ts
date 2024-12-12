import { create } from "zustand";

interface ModalStoreProps<T> {
  modalType: T | null;
  isOpen: boolean;
  onOpenModal: (modalType: T) => void;
  onCloseModal: () => void;
}

const createModalStore = <T>() => {
  return create<ModalStoreProps<T>>((set) => ({
    isOpen: false,
    modalType: null,
    onOpenModal: (modalType) => set({ modalType, isOpen: true }),
    onCloseModal: () => set({ isOpen: false, modalType: null }),
  }));
};

export default createModalStore;
