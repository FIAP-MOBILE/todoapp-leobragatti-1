import { useState } from "react";
import { FlatList, View } from "react-native";

import { Task } from "../types";
import Form from "../Components/Form";
import Item from "../Components/Item";
import { styles } from "../styles";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const add = (task: Task) => {
    setTasks((previous) => [...previous, task]);
  };

  return (
    <View style={styles.container}>
      <Form onSubmit={add} />
      <FlatList data={tasks} renderItem={({ item }) => <Item task={item} />} />
    </View>
  );
};

export default Tasks;
