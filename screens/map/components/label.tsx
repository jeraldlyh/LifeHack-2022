import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MAIN_THEME } from "../../../common/constants";

type TLabelProps = {
    text: string;
    icon: JSX.Element;
    isSelected?: boolean;
    handleOnPress: () => void;
};

export const Label = ({ text, icon, isSelected, handleOnPress }: TLabelProps) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, ...(isSelected && { backgroundColor: MAIN_THEME.COLOR.GREEN }) }}
            onPress={handleOnPress}
        >
            {icon}
            <Text style={{ ...styles.labelText, ...(isSelected && { color: "white" }) }}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        borderRadius: 4,
        height: 40,
        alignItems: "center",
        paddingHorizontal: 15,
        minWidth: "47%",
        margin: 3,
    },
    labelText: {
        fontFamily: "DMSans-Bold",
        marginLeft: 8,
    },
});
