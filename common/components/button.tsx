import React from "react"
import { MAIN_THEME } from "../constants"
import { StyleProp, ViewStyle, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type TSButtonProps = {
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<ViewStyle>;
    text: string;
    handleOnPress?: () => void;
};

export const Button = ({ buttonStyle, text, textStyle, handleOnPress }: TSButtonProps) => {
    return (
        <TouchableOpacity onPress={handleOnPress} style={[styles.buttonContainer, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        backgroundColor: MAIN_THEME.COLOR.GREEN,
        borderRadius: 8,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontFamily: "DMSans-Bold",
        fontSize: 17,
    },
});
