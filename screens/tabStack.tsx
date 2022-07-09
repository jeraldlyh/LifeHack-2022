import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import Icon from "react-native-vector-icons/Ionicons";
import { WelcomeScreen } from "./auth/welcomeScreen";
import RecycleStack from "./recycle/recycleStack";
import { MapStack } from "./map";
import { ProfileStack } from "./profile";
import { MarketplaceStack } from "./marketplace";

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                lazy: false,
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === "HomeStack") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "MapStack") {
                        iconName = focused ? "map" : "map-outline";
                    } else if (route.name === "RecycleStack") {
                        iconName = focused ? "sync-circle" : "sync-circle-outline";
                    } else if (route.name === "MarketplaceStack") {
                        iconName = focused ? "wallet" : "wallet-outline";
                    } else {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <Icon name={iconName} size={25} />;
                },
                tabBarLabelStyle: {
                    fontFamily: "DMSans-Bold",
                },
                tabBarActiveTintColor: "#2B2B2B",
                tabBarInactiveTintColor: "gray",
                // header: ({ navigation, route, options }) => {
                //     const title = getHeaderTitle(options, route.name);

                //     if (WHITELIST_ROUTES.includes(title)) {
                //         return <Header navigation={navigation} title={title} />;
                //     }
                //     return null;
                // },
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomeStack" component={WelcomeScreen} options={{ title: "Home" }} />
            <Tab.Screen name="RecycleStack" component={RecycleStack} options={{ title: "Recycle" }} />
            <Tab.Screen name="MapStack" component={MapStack} options={{ title: "Maps" }} />
            <Tab.Screen name="MarketplaceStack" component={MarketplaceStack} options={{ title: "Marketplace" }} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: "Profile" }} />
        </Tab.Navigator>
    );
};

export default TabStack;
