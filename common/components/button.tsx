import React from "react"
import { StyleProp, ViewStyle, View, Text, StyleSheet } from "react-native"

type TSButtonProps = {
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<ViewStyle>
    text: string
}

export const Button = ({ buttonStyle, text, textStyle }: TSButtonProps) => {
    return (
        <View style={[styles.buttonContainer, buttonStyle]}>
            <Text style={[styles.buttonText, textStyle]}>
                {text}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        backgroundColor: "#56884E",
        borderRadius: 8,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontFamily: "DMSans-Bold",
        fontSize: 17,
    }
})