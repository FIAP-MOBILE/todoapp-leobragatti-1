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

const Tasks = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const add = () => {
    setTasks((previous) => [...previous, task]);
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
          <TouchableOpacity style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Tasks;
