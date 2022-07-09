import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "./mapScreen";
import { RecyclingForm } from "./recyclingForm";

const Map = createStackNavigator();

export const MapStack = () => {
    return (
        <Map.Navigator screenOptions={{ headerShown: false }}>
            <Map.Screen name="Map" component={MapScreen} />
            <Map.Screen name="RecycleForm" component={RecyclingForm} options={{ title: "Recycle Form" }} />
        </Map.Navigator>
    );
};
