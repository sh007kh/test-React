import { FaTimes } from "react-icons/fa";
import sideLinks from "./Dasta";
import { AppGlobalContext } from "./Context";
const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = AppGlobalContext();
  return (
    <aside
      className={
        isSidebarOpen
          ? " absolute top-0 left-0 h-screen w-screen bg-white p-4 transition-all duration-500 ease-in-out max-w-lg"
          : "hidden  top-0 left-0 min-h-screen min-w-screen bg-white p-4 transition-all duration-500 ease-in-out "
      }
    >
      <div className="flex justify-between  max-w-10/12 mx-auto h-16 items-center mb-6">
        <h1 className="capitalize text-2xl font-bold tracking-[0.25rem] transition-all duration-300 ease-in-out cursor-default hover:text-blue-800">
          SubMenus
        </h1>
        <button
          type="button"
          className="text-3xl text-purple-700 transition-all duration-300 ease-in-out hover:(text-purple-500)"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="px-6">
        {sideLinks.map((data) => {
          const { pageId, page, links } = data;
          return (
            <li
              key={pageId}
              className={
                page === "products"
                  ? ""
                  : " py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-800"
              }
            >
              <h1 className="text-lg font-bold ">{page}</h1>
              <ul className="">
                {links.map((link) => {
                  const { Id, label, desc, items } = link;
                  if (page === "products")
                    return (
                      <li
                        key={Id}
                        className="bg-gray-200 py-2 px-2 border-gray-500  not-last:border-b-1 group transition-all duration-300 ease-in-out hover:cursor-pointer"
                      >
                        <h2 className="font-bold group-hover:text-gray-600 transition-all duration-300 ease-in-out">
                          {label}
                        </h2>
                        <p className="text-gray-500 group-hover:text-gray-400 transition-all duration-300 ease-in-out">
                          {desc}
                        </p>
                      </li>
                    );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
