import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ModalProvider, AuthProvider } from "./providers";
import { RootStack } from "./screens";
import { MarketplaceHome } from "./screens/marketplace/marketHome";
import { AboutItem } from "./screens/marketplace/aboutItem";
import { MarketplaceStack } from "./screens/marketplace";

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
            "DMSans-Italic": require("./assets/fonts/DMSans-Italic.ttf"),
            "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
            "DMSans-BoldItalic": require("./assets/fonts/DMSans-BoldItalic.ttf"),
            "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
            "DMSans-MediumItalic": require("./assets/fonts/DMSans-MediumItalic.ttf"),
        });
        setIsLoaded(true);
    };

    return (
        <SafeAreaProvider>
            {isLoaded ? (
                <AuthProvider>
                    <ModalProvider>
                        <NavigationContainer>
                            <RootStack />
                        </NavigationContainer>
                    </ModalProvider>
                </AuthProvider>
            ) : (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}
        </SafeAreaProvider>
    );
}
