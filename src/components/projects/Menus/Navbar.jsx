import { FaBars } from "react-icons/fa6";
import { AppGlobalContext } from "./Context";

const Navbar = () => {
  const { openSidebar } = AppGlobalContext();
  return (
    <nav className="h-20 bg-purple-400 ">
      <div className="nav-center">
        <div className="flex justify-between items-center px-6 py-6">
          <h1 className="text-white capitalize text-2xl font-bold tracking-[0.25rem]">
            Submenus
          </h1>
          <button
            type="button"
            className="text-white text-3xl"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
