import { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { Task } from "../types";
import Form from "../Components/Form";
import Item from "../Components/Item";
import { styles } from "../styles";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { TodoContext } from "../Context/TodoContext";

const Tasks = () => {
  const { tasks, add } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <Form onSubmit={add} />
      <FlatList data={tasks} renderItem={({ item }) => <Item task={item} />} />
    </View>
  );
};

export default Tasks;
