import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Task } from "../types";

type FormProps = {
  onSubmit: (task: Task) => void;
};

const Form: (props: FormProps) => React.ReactNode = ({ onSubmit }) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = () => {
    onSubmit({ title: task, createdAt: new Date() });
    setTask("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui sua tarefa"
        onChangeText={setTask}
        value={task}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
