import { FaBars } from "react-icons/fa6";
import { AppGlobalContext } from "./Context";

const Home = () => {
  const { openModal, openSidebar } = AppGlobalContext();
  return (
    <main className="grid place-items-center min-h-screen bg-gray-100">
      <button
        type="button"
        className="fixed top-8 left-12 text-3xl text-blue-500 animate-bounce-back origin-bottom"
        onClick={openSidebar}
      >
        <FaBars />
      </button>
      <button type="button" className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
export default Home;
