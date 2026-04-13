import { RouteProp, useRoute } from "@react-navigation/native";
import { Tasks } from "../types/navigation";
import { default as DetailsComponent } from "../Components/Details";

const Details = () => {
  const {
    params: { task },
  } = useRoute<RouteProp<Tasks, "Details">>();

  return <DetailsComponent task={task} />;
};

export default Details;
