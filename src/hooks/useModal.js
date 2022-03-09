import { useState } from "react";
import BlogPostModal from "../pages/blogPage/BlogPostModal";
const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    BlogPostModal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
    setModalState,
  };
};

export default useModal;
