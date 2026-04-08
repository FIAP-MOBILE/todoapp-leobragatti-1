import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Home } from "../types/navigation";


const Details = () => {
    const route = useRoute<RouteProp<Home>>();

    return (
        <View>
            <Text>{route.params?.task.title}</Text>
            <Text>{route.params?.task.createdAt.toString()}</Text>
        </View>
    )
}

export default Details;