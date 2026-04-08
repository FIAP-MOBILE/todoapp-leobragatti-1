import { StatusBar } from "react-native";
import Tasks from "./src/Components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/types/navigation";
import Details from "./src/Components/Details";

export default function App() {
  const Stack = createStackNavigator<Home>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={Tasks} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
