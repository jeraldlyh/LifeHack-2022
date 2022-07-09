import { StyleSheet } from "react-native";
import { View } from "react-native";

type TOverlayCardProps = {
    children: JSX.Element;
    height: number;
    isAbsolute?: boolean;
};

export const OverlayCard = ({ children, height, isAbsolute }: TOverlayCardProps) => {
    return (
        <View style={{ ...styles.container, height, ...(isAbsolute && { marginHorizontal: -26 }) }}>{children}</View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal:20,
        paddingVertical:30
    },
});
