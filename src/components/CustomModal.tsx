import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

export interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function CustomModal(props: CustomModalProps) {
  const { isOpen, onClose, children } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minH="586px" maxW="435px" bg="white">
        <ModalHeader position="absolute" right="0">
          <ModalCloseButton color="black" />
        </ModalHeader>
        <ModalBody p="0">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
