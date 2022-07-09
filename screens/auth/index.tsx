import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./authScreen";
import { WelcomeScreen } from "./welcomeScreen";

const Auth = createStackNavigator();

export const AuthStack = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen name="Welcome" component={WelcomeScreen} />
            <Auth.Screen name="Login" component={LoginScreen} />
        </Auth.Navigator>
    );
};
