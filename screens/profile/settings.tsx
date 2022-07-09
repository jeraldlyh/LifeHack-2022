import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button } from "../../common/components";
import { Card } from "./components/card";

const SettingsPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.subHeader}>Account</Text>
                <Card text="Set Two-Factor Authentication" icon="lock-outline" />
                <Card text="Language" icon="translate" />
                <Card text="Font Size" icon="format-size" />
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subHeader}>Notifications</Text>
                <Card text="Notification Settings" icon="bell-outline" />
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subHeader}>About</Text>
                <Card text="Terms of Use" icon="file-outline" />
                <Card text="Privacy Policy" icon="shield-edit-outline" />
                <Card text="Report a problem" icon="alert-circle-outline" />
            </View>

            <View style={{ marginTop: 30, marginBottom: 60, width: "100%" }}>
                <Button text="Log out" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    subHeader: {
        fontFamily: "DMSans-Bold",
        marginBottom: 10,
        marginTop: 17,
        marginLeft: 3,
        fontSize: 18,
    },
    subContainer: {
        width: "100%",
    },
    text: {
        color: "#9999AA",
        fontFamily: "DMSans-Regular",
    },
    individualRow: {
        height: 54,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: 14,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 15,
    },
    container: {
        width: "100%",
        paddingVertical: 25,
        paddingHorizontal: 30,
        alignItems: "center",
        backgroundColor: "#FFF",
    },
});

export default SettingsPage;
