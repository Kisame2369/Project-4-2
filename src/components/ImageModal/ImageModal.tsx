import Modal from "react-modal";
import type { PhotoCollection } from "../../types";

Modal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: PhotoCollection | null;
};

function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: {
          maxWidth: "500px",
          margin: "auto",
          padding: "1rem",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Image"}
        style={{ width: "100%" }}
      />
    </Modal>
  );
}

export default ImageModal;