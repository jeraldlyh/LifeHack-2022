import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

type THeaderText = {
    title: string;
    isRoot: boolean
};

export const Header = (text: THeaderText) => {
    const navigator = useNavigation()
    return (
        <View style={styles.headerContainer}>
            {!text.isRoot?<Icon name="chevron-left" size={40} style={styles.backButton} onPress = {()=>navigator.goBack()}/>:null}
            <Text style={styles.headerText}>{text.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 40,
        width: "100%",
        alignItems:"center",
        justifyContent:'center'
    },
    backButton: {
        alignSelf:"flex-start"
    },
    headerText: {
        position: "absolute",
        fontFamily:"DMSans-Bold",
        fontSize:22
    },
});
