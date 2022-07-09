import React from "react"
import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from "react-native"
import Icon  from "react-native-vector-icons/EvilIcons"

type TSSearchProps={
    searchContainerStyle?: StyleProp<ViewStyle>
}

export const SearchBar = ({searchContainerStyle}:TSSearchProps) => {
    return (
        <View style={[styles.searchBar,searchContainerStyle]}>
            <Icon size={20} name="search" ></Icon>
            <TextInput placeholder="Search" />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderRadius: 9,
        padding: 12,
        alignItems:"center",
        height: 50
    }
})