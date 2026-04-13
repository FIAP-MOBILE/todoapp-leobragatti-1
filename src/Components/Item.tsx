import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Task } from "../types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Tasks } from "../types/navigation";

type Props = {
  task: Task;
};

const Item: (props: Props) => React.ReactNode = ({ task }) => {
  const navigation = useNavigation<NavigationProp<Tasks>>();
  return (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => navigation.navigate("Details", { task })}
    >
      <Text style={styles.todoText}>{task.title}</Text>
    </TouchableOpacity>
  );
};

export default Item;
