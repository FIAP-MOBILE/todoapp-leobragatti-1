import { View, Text } from "react-native";
import { styles as globalStyles } from "../styles";
import React from "react";
import { Task } from "../types";
import { styles } from "./styles";

type Props = {
  task: Task;
};

const Details: (props: Props) => React.ReactNode = ({ task }) => {
  return (
    <View style={[globalStyles.container, styles.details]}>
      <Text style={styles.title}>Tarefa</Text>
      <Text style={styles.description}>{task.title}</Text>
      <Text style={styles.title}>Data de criação</Text>
      <Text style={styles.description}>{task.createdAt.toString()}</Text>
    </View>
  );
};

export default Details;
