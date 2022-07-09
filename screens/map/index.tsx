import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "./mapScreen";

const Map = createStackNavigator();

export const MapStack = () => {
    return (
        <Map.Navigator>
            <Map.Screen name="Map" component={MapScreen} />
        </Map.Navigator>
    );
};
