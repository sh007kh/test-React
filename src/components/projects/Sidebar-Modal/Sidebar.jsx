import { FaTimes } from "react-icons/fa";
import { AppGlobalContext } from "./Context";
import { links, social } from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = AppGlobalContext();
  return (
    <aside
      className={
        isSidebarOpen
          ? "absolute top-0 left-0 w-screen h-screen bg-white transition-all duration-300 ease-in-out max-w-3xl md:max-w-xs"
          : "absolute top-0 left-0 w-screen h-screen bg-white -translate-x-full transition-all duration-300 ease-in-out max-w-xl"
      }
    >
      <div className="grid grid-rows-[auto_1fr_auto]  min-h-screen">
        <div className="flex justify-between items-center px-8 py-2 mb-8">
          <h1 className="capitalize text-3xl text-gray-600">codemaster</h1>
          <button
            className=" text-red-700 text-3xl top-4 right-8 transition-all duration-300 ease-in-out cursor-pointer hover:(text-red-500)"
            onClick={closeSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links-container">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  className="px-4 py-4  flex gap-2 transition-all duration-300 ease-in-out hover:(text-blue-700 bg-blue-100) capitalize text-xl tracking-widest"
                >
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center items-center gap-4 mb-24">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  className="text-2xl transition-all duration-300 ease-in-out hover:(text-blue-700)"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
