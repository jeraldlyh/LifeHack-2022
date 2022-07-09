import React from "react";
import { View, StyleSheet, Text } from "react-native";

type TabProps = {
    active: boolean;
    onPress(): void;
    text: string;
};
function Tab(props: TabProps) {
    return (
        <View style={props.active ? styles.active : styles.inactive}>
            <Text
                onPress={props.onPress}
                style={props.active ? styles.activeText : styles.inactiveText}
            >
                {props.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    activeText: {
        fontSize: 20,
        color: "black",
        fontFamily: "Poppins-Bold",
        paddingLeft: 21,
        paddingRight: 21,
        height: 30,
    },
    inactiveText: {
        fontSize: 20,
        color: "#bbbbbb",
        fontFamily: "Poppins-Bold",
        paddingLeft: 21,
        paddingRight: 21,
        height: 30,
    },
    active: {
        borderBottomWidth: 2,
        borderColor: "black",
    },
    inactive: {
        borderBottomWidth: 2,
        borderColor: "#bbbbbb",
    },
});

export default Tab;
