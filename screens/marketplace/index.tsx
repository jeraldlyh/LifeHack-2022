import { createStackNavigator } from "@react-navigation/stack";
import { AboutItem } from "./aboutItem";
import { MarketplaceHome } from "./marketHome";


const Marketplace = createStackNavigator();

export const MarketplaceStack = () => {
    return (
        <Marketplace.Navigator screenOptions = {{headerShown:false}}>
            <Marketplace.Screen name="MarketplaceHome" component={MarketplaceHome} />
            <Marketplace.Screen name="AboutItem" component={AboutItem} />
        </Marketplace.Navigator>
    );
};
