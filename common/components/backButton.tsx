import { Icon } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type TBackButtonProp = {
    handleOnPress: () => void;
};

export const BackButton = ({ handleOnPress }: TBackButtonProp) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <Icon name="arrowleft" type="antdesign" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#F0F0F0",
        borderRadius: 999,
        padding: 2,
        height: 45,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
    },
});
