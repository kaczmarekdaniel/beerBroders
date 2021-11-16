import React, { useState, useEffect } from "react";

export const AppContext = React.createContext({
  currentUser: null,
  loggedUser: () => {},
  setCurrentUser: () => {},
});

const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const loggedUser = () => {
    alert("xd");
  };

  return (
    <AppContext.Provider value={{ currentUser, loggedUser, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
