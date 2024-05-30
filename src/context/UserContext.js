import React, { createContext, useState, useEffect } from 'react';
import user from "../schema/user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(user);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };