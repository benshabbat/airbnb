import { createContext, useState,useEffect } from "react";
import { getById } from "../Utils";
export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const { data } = await getById("/users", user._id);
        setUser(data);
      }
    };
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
