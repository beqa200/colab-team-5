import { createContext, useState, ReactNode } from "react";

interface MyContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  userModal: boolean;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: MyContextType = {
  state: "default value",
  setState: () => {},
  userModal: false,
  setUserModal: () => {},
};

export const MyContext = createContext<MyContextType>(defaultContextValue);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<string>("default value");
  const [userModal, setUserModal] = useState(false);

  return (
    <MyContext.Provider value={{ state, setState, userModal, setUserModal }}>
      {children}
    </MyContext.Provider>
  );
};
