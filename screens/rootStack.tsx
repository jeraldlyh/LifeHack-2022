import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../providers/auth";
import TabStack from "./tabStack";
import { AuthStack } from "./auth";

const Root = createStackNavigator();

export const RootStack = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {true ? <Root.Screen name="Tab" component={TabStack} /> : <Root.Screen name="Auth" component={AuthStack} />}
        </Root.Navigator>
    );
};
