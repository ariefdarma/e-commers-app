'use client';
import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '../ui/modal';

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Creat Store"
      description="Add a new store to manage products and category"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Creat Store Form
    </Modal>
  );
};
