import { FaTimes } from "react-icons/fa";

import { AppGlobalContext } from "./Context";

const Modal = () => {
  const { closeModal, isModalOpen } = AppGlobalContext();
  return (
    <div
      className={
        isModalOpen
          ? "visible opacity-100 fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out"
          : "invisible opacity-0 fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] "
      }
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-80 max-w-xl h-64 grid place-items-center rounded-md">
        <button
          type="button"
          className="absolute top-4 right-4 text-4xl text-red-700 transition-all duration-300 ease-in-out cursor-pointer hover:(text-red-500)"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
        <h1 className="text-4xl text-black">Modal</h1>
      </div>
    </div>
  );
};
export default Modal;
