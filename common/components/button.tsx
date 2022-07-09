import React from "react";
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
        backgroundColor: "#56884E",
        borderRadius: 8,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontFamily: "DMSans-Bold",
        fontSize: 17,
    },
});
