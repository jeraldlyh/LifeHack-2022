import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from "./profile";
import SettingsPage from "./settings";

const Profile = createStackNavigator();

export const ProfileStack = () => {
    return (
        <Profile.Navigator screenOptions={{ headerShown: false }}>
            <Profile.Screen name="Profile" component={ProfilePage} />
            <Profile.Screen name="Settings" component={SettingsPage} />
        </Profile.Navigator>
    );
};
