import Tasks from "./src/Screens/Tasks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Tasks as TasksStack } from "./src/types/navigation";
import Details from "./src/Screens/Details";

export default function App() {
  const Stack = createStackNavigator<TasksStack>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={Tasks} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
