import { useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { Task } from "../types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Home } from "../types/navigation";

const Tasks = () => {
  const navigation = useNavigation<NavigationProp<Home>>();

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const add = () => {
    setTasks((previous) => [
      ...previous,
      { title: task, createdAt: new Date() },
    ]);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui sua tarefa"
          onChangeText={setTask}
          value={task}
        />

        <TouchableOpacity style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.todoItem}
            onPress={() => navigation.navigate("Details", {task: item})}
          >
            <Text style={styles.todoText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Tasks;
