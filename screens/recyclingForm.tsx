import { Text, View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../common/components";
import { Button } from "../common/components/button";
import Icon from "react-native-vector-icons/AntDesign";

export const RecyclingForm = () => {
    const [length, setLength] = useState<number>(0);

    return (
        <Container>
            <Text style={styles.title}>Upload Image of items recycled</Text>
            <Text style={styles.subtitle}>Image will be used for point processing</Text>
            <TouchableOpacity containerStyle={styles.uploadImage}>
                <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
            <View style={styles.headers}>
                <Text style={styles.title}>Was the recycling bin full</Text>
            </View>
            <View style={styles.textInputBar}>
                <TextInput placeholder="Input text here" />
            </View>
            <View style={styles.headers}>
                <Text style={styles.title}>Cleanliness rating</Text>
            </View>
            <View style={styles.rating}>
                <Icon name="star" size={24} color="#AAAAAA" />
                <Icon name="star" size={24} color="#AAAAAA" />
                <Icon name="star" size={24} color="#AAAAAA" />
                <Icon name="star" size={24} color="#AAAAAA" />
                <Icon name="star" size={24} color="#AAAAAA" />
            </View>
            <View style={styles.headers}>
                <Text style={styles.title}>Concerns</Text>
            </View>
            <View style={styles.descriptionInputBar}>
                <TextInput
                    placeholder="Input concern"
                    maxLength={500}
                    onChangeText={(newText) => {
                        setLength(newText.length);
                    }}
                />
            </View>
            <Text style={styles.wordCount}>{500 - length}/500 characters</Text>
            <Button text="Submit" buttonStyle={{ marginTop: 30 }} />
        </Container>
    );
};

const styles = StyleSheet.create({
    headers: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    },
    textInputBar: {
        width: "100%",
        padding: 15,
        borderWidth: 0.5,
        marginTop: 10,
        borderRadius: 8,
    },
    title: {
        fontFamily: "DMSans-Bold",
        fontSize: 17,
        marginTop: 20,
    },
    subtitle: {
        fontFamily: "DMSans-Regular",
    },
    descriptionInputBar: {
        width: "100%",
        padding: 15,
        borderWidth: 0.5,
        marginTop: 10,
        borderRadius: 8,
        height: 200,
    },
    wordCount: {
        marginRight: "auto",
        fontFamily: "DMSans-Regular",
        fontSize: 14,
        color: "grey",
    },
    uploadImage: {
        width: "100%",
        height: 100,
        backgroundColor: "#F4F4F4",
        marginTop: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
});
