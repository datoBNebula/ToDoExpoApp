import React, { createContext, useState} from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [visible, setVisible] = useState(null);
  const [tasks, setTasks] = useState([])
  const [taskId, setTaskId] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)
//   const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ visible, setVisible, tasks, setTasks, taskId, setTaskId, openMenu, setOpenMenu}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;