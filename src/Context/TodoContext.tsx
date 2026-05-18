import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Task } from "../types";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

type TodoContextType = {
  tasks: Task[];
  add: (task: Task) => void;
};

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

const TodoProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { setItem, getItem } = useAsyncStorage("tasks");

  const add = async (task: Task) => {
    const newData = [...tasks, task];
    setTasks(newData);
    await setItem(JSON.stringify(newData));
  };

  const loadData = async () => {
    const data = await getItem();
    if (!data) return;
    setTasks(JSON.parse(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <TodoContext.Provider value={{ tasks, add }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
