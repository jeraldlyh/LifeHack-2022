import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MAIN_THEME } from "../../../common/constants";

export const Card = (props: any) => {
    const styles = StyleSheet.create({
        container: {
            height: 64,
            flexDirection: "row",
            width: "100%",
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            shadowColor: "#18396B",
            shadowOffset: { width: 0, height: 1.5 },
            shadowOpacity: 0.2,
            shadowRadius: 0.5,
            marginBottom: 12,
            backgroundColor: "#F9F9F9",
        },
        text: {
            fontSize: 15.5,
            color: "#091F44",
            fontFamily: "DMSans-Regular",
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={{ width: "10%", marginLeft: 6 }}>
                <Icon name={props.icon} size={25} color={MAIN_THEME.COLOR.GREEN} />
            </View>
            <View
                style={{
                    justifyContent: "flex-start",
                    width: "78%",
                }}
            >
                <Text style={styles.text}> {props.text}</Text>
            </View>
            <View
                style={{
                    justifyContent: "flex-start",
                    width: "7%",
                }}
            >
                <Icon name="chevron-right" size={25} color={MAIN_THEME.COLOR.GREEN} />
            </View>
        </TouchableOpacity>
    );
};
