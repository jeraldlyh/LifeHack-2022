import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type TContainerProps = {
    children: React.ReactNode;
    scrollable?: boolean;
    style?: StyleProp<ViewStyle>;
};

export const Container = ({ children, scrollable, style }: TContainerProps) => {
    if (scrollable) {
        return <ScrollView contentContainerStyle={[styles.scrollViewContainer, style]}>{children}</ScrollView>;
    }

    return <View style={[style, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 26,
        backgroundColor: "white",
    },
    scrollViewContainer: {
        paddingHorizontal: 26,
        backgroundColor: "white",
    },
});
