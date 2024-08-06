import React, { createContext, useState, ReactNode } from "react";

interface MyContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContextValue: MyContextType = {
  state: "default value",
  setState: () => {},
};

const MyContext = createContext<MyContextType>(defaultContextValue);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<string>("default value");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};
