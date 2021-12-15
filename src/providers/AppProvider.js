import React, { useState, useEffect } from "react";

export const AppContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
