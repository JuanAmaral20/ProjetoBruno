import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers, products, setProducts }}>
      {children}
    </UserContext.Provider>
  );
};
