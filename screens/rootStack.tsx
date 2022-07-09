import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../providers/auth";
import { AuthStack } from "./auth";
import TabStack from "./tabStack";

const Root = createStackNavigator();

export const RootStack = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Root.Screen name="Tab" component={TabStack} />
            ) : (
                <Root.Screen name="Auth" component={AuthStack} />
            )}
        </Root.Navigator>
    );
};
