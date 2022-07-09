import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { Container } from "../../common/components";
import {
    recycling1,
    recycling2,
    recycling3
} from "../../assets/welcomeScreen/"
import React, { Fragment } from "react";

import Swiper from "react-native-swiper";
import { TScreenProp } from "../../common/types";
import { Button } from "../../common/components/button";


export const WelcomeScreen = ({ navigation }: TScreenProp) => {

    const IMAGE_DATA = [
        { image: recycling1, text: "Recycling made simple and convenient" },
        { image: recycling2, text: "Recycling made simple and convenient" },
        { image: recycling3, text: "Recycling made simple and convenient" },
    ];

    return (
        <Container >
            <Swiper autoplay showsPagination style={styles.swiperStyle} >
                {IMAGE_DATA.map((data, index) => (
                    <View>
                    <Image
                        key={index}
                        source={data.image}
                        style={styles.imageContainer}
                    />
                    <Text style = {styles.swiperText}>
                        {data.text}
                    </Text>
                    </View>
                        
                ))}
            </Swiper>
            <Button text="Get Started" buttonStyle = {styles.buttonContainer}/>
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
    descriptionText: {
        width: "70%",
        color: "#fff",
        fontSize: 19,
        fontWeight: "500",
        alignSelf: "flex-end",
        textAlign: "right",
        lineHeight: 27,
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
        color: "green"
    },
    buttonContainer: {
        marginTop: 100,
        marginBottom: 50
    },
    swiperStyle: {
        marginTop: 150
    },
    swiperText:{
        fontSize:18,
        fontFamily:"DMSans-Regular",
        textAlign:"center",
        color:"#918F98"
    }
}
);
