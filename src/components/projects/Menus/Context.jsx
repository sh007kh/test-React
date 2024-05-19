import { useState } from "react";
import { createContext, useContext } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppGlobalContext = () => useContext(AppContext);
