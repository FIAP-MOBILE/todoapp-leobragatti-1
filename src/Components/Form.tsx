import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React, { useEffect, useState } from "react";
import { Task } from "../types";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

type FormProps = {
  onSubmit: (task: Task) => void;
};

const Form: (props: FormProps) => React.ReactNode = ({ onSubmit }) => {
  const [task, setTask] = useState<string>("");
  const { setItem, getItem, removeItem } = useAsyncStorage("task");

  const handleOnChangeText = async (text: string) => {
    await setItem(text);
    setTask(text);
  };

  const loadData = async () => {
    const data = await getItem();
    if (!data) return;
    setTask(data);
  };

  const handleSubmit = async () => {
    onSubmit({ title: task, createdAt: new Date() });
    setTask("");
    await removeItem();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui sua tarefa"
        onChangeText={handleOnChangeText}
        value={task}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
