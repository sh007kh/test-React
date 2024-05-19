import { useState } from "react";
import { createContext, useContext } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);

    console.log(isModalOpen);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
        isModalOpen,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppGlobalContext = () => useContext(AppContext);
