import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../../../common/components/button";
import { MAIN_THEME } from "../../../../common/constants";
import { TScreenProp } from "../../../types";

export default function CompetitionQuestion({
    navigation,
    route,
}: TScreenProp) {
    const { question, title, amount, options, setter } = route.params;
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        navigation.setOptions({ title });
    }, []);

    const renderQuestions = () => {
        return options.map((option: string, index: number) => (
            <TouchableOpacity
                containerStyle={{
                    ...styles.optionContainer,
                    ...(activeIndex === index && {
                        backgroundColor: MAIN_THEME.COLOR.LIGHT_GREEN,
                    }),
                }}
                onPress={() => setActiveIndex(index)}
            >
                <Text
                    style={{
                        ...styles.optionText,
                    }}
                >
                    {option}
                </Text>
            </TouchableOpacity>
        ));
    };

    const handleSubmit = () => {
        console.log("Sending API");
        navigation.navigate("CompetitionHome");
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.blurContainer}>
                    <View
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}
                        >
                            {title}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-SemiBold",
                                fontSize: 15
                            }}
                        >
                            {" "}
                            +{amount} points
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Image
                            source={require("../../../../assets/profile/profile1.png")}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text
                                style={{
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: 18,
                                }}
                            >
                                {setter}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Poppins-Normal",
                                    fontSize: 15,
                                }}
                            >
                                #1
                            </Text>
                        </View>
                    </View>
                </View>
                <Image
                    source={require("../../../../assets/course/java.jpg")}
                    style={{ width: "100%", height: "100%", borderRadius: 14 }}
                />
            </View>
            <View style={styles.restContainer}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Poppins-SemiBold",
                            color: MAIN_THEME.COLOR.GREEN,
                        }}
                    >
                        0:05
                    </Text>
                    <View style={{ width: "80%" }}>
                        <View
                            style={{
                                width: "100%",
                                height: 4,
                                borderRadius: 9,
                                backgroundColor: "#e8e8e8",
                            }}
                        >
                            <View
                                style={{
                                    width: "40%",
                                    height: "100%",
                                    backgroundColor: "#91B48C",
                                }}
                            />
                        </View>
                    </View>
                </View>
                <Text
                    style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 20,
                        marginTop: 20,
                    }}
                >
                    {question}
                </Text>

                {renderQuestions()}

                <Button
                    style={{ background: { marginTop: 30 } }}
                    backgroundColor={MAIN_THEME.COLOR.GREEN}
                    textColor="white"
                    children="Confirm"
                    height={50}
                    onPress={() => handleSubmit()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    imageContainer: {
        width: "100%",
        height: "30%",
        alignItems: "center",
    },
    blurContainer: {
        position: "absolute",
        alignSelf: "center",
        bottom: 30,
        zIndex: 1000,
        width: "90%",
        backgroundColor: "#F4F4F4",
        padding: 20,
        borderRadius: 10,
        // alignItems:"center",
    },
    restContainer: {
        padding: 40,
        width: "100%",
        alignItems: "center",
    },
    optionContainer: {
        borderRadius: 14,
        marginTop: 15,
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
        justifyContent: "center",
        borderWidth: 1,
    },
    optionText: { fontFamily: "Poppins-Normal", fontSize: 15 },
});
