"use client";
import { createContext, useState } from "react";
import { User } from "../type";
type userContextType = {
  user: null | User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext({} as userContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
