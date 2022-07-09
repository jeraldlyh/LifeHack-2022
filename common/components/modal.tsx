import React from "react";
import { Dimensions, Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { BlurView } from "expo-blur";

type TModalProp = {
    body: React.ReactNode | string;
};

export const Modal = ({ body }: TModalProp) => {
    const handlePress = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback style={{ width: "100%", height: "100%" }} onPress={handlePress} accessible={false}>
            <BlurView intensity={95} tint="light" style={styles.modalBackground}>
                {body}
            </BlurView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1F2937",
        zIndex: 100,
    },
});
