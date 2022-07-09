import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type CategoryProps = {
    name: String,
};
const Categories = (props: CategoryProps) => {
    // const navigation = useNavigation();

    // const onPressed = () => {
    //     const name = props.name;

    //     if (name === "Courses") {
    //         navigation.push("Document");
    //     } else if (name === "Trivia") {
    //         navigation.push("Trivia");
    //     } else if (name === "News") {
    //         navigation.push("News");
    //     } else if (name === "Community") {
    //         navigation.push("Community");
    //     };
    // };

    return (
        <TouchableOpacity
            containerStyle={[styles.container, { alignItems: "center", justifyContent: "center" }]}
        >
            {props.name === "Math" ? (
                <Image
                    source={require("../../../assets/icons/math.jpg")}
                    style={styles.image}
                />
            ) : null}
            {props.name === "Science" ? (
                <Image
                    source={require("../../../assets/icons/science.jpg")}
                    style={styles.image}
                />
            ) : null}
            {props.name === "Grammar" ? (
                <Image
                    source={require("../../../assets/icons/grammar.jpg")}
                    style={styles.image}
                />
            ) : null}
            {props.name === "Coding" ? (
                <Image
                    source={require("../../../assets/icons/coding.jpg")}
                    style={styles.image}
                />
            ) : null}

            <Text style={[{marginTop:10}, styles.text]}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 88,
        height: 104,
        borderRadius: 14,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginRight: 20,
    },
    image: {
        height: 25,
        width: 25,
    },
    community: {
        height: 22,
        width: 29,
    },
    text: {
        color: "#2b2b2b",
        fontFamily: "Poppins-SemiBold",
    },
});

export default Categories;
