import { Text, View, StyleSheet, Image } from "react-native";
import { Container } from "../../common/components";
import { recycling1, recycling2, recycling3 } from "../../assets/welcomeScreen/";
import React from "react";

import Swiper from "react-native-swiper";
import { TScreenProp } from "../../common/types";
import { Button } from "../../common/components/button";

export const WelcomeScreen = ({ navigation }: TScreenProp) => {
    const IMAGE_DATA = [
        { image: recycling1, text: "Recycling made simpler and more convenient" },
        { image: recycling2, text: "Designed to improve recycling knowledge and overall recycling rates" },
        { image: recycling3, text: "Encourage upcycling to reduce waste" },
    ];

    return (
        <Container>
            <Swiper autoplay showsPagination style={styles.swiperStyle}>
                {IMAGE_DATA.map((data, index) => (
                    <React.Fragment key={index} >
                        <Image source={data.image} style={styles.imageContainer} />
                        <Text style={styles.swiperText}>{data.text}</Text>
                    </React.Fragment>
                ))}
            </Swiper>
            <Button text="Get Started" buttonStyle={styles.buttonContainer} handleOnPress = {()=>navigation.push("Login")} />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    imageContainer: {
        resizeMode: "contain",
        height: "60%",
        width: "auto",
    },
    imageDescriptionContainer: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 52,
    },
    titleTextContainer: {
        flexDirection: "row",
    },
    titleTextLeft: {
        fontFamily: "DMSans-Bold",
        fontSize: 36,
        color: "#fff",
    },
    titleTextRight: {
        fontFamily: "DMSans-BoldItalic",
        fontSize: 36,
        color: "green",
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 200,
    },
    swiperStyle: {
        marginTop: 150,
    },
    swiperText: {
        fontSize: 18,
        fontFamily: "DMSans-Regular",
        textAlign: "center",
        color: "#918F98",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
    },
});
