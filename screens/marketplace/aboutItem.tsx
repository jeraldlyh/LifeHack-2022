import { faker } from "@faker-js/faker";
import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity, ScrollView } from "react-native";
import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/EvilIcons";
import { OverlayCard } from "../../common/components";
import { Button } from "../../common/components/button";
import { MAIN_THEME } from "../../common/constants";

type TNavigationProps = {
    route: TRouteProp;
};

type TRouteProp = {
    params: TRouteParamsProp;
};

type TRouteParamsProp = {
    price: string;
    image: ImageSourcePropType;
    title: string;
};

export const AboutItem = (navigationRoute: TNavigationProps) => {
    var { faker } = require("@faker-js/faker/locale/en");
    faker.setLocale("en");

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}>
            <ImageBackground source={navigationRoute.route.params.image} style={styles.backgroundImage} />
            <View style={styles.overlayContainer}>
                <OverlayCard height={600}>
                    <View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.titleText}>{navigationRoute.route.params.title}</Text>
                            <Icon size={35} name="heart" />
                        </View>
                        <Text style={styles.price}>{navigationRoute.route.params.price}</Text>
                        <View style={styles.listingDetailContainer}>
                            <Icon name="clock" size={20} style={{ marginRight: 2 }} />
                            <Text style={styles.listedDate}>1 week ago by</Text>
                            <Text style={styles.userList}> JohnDoe</Text>
                        </View>
                        <Text style={styles.subheaderTitle}>About this item</Text>

                        <Text style={styles.text}>
                            {/* {"\u2022"} Durable lead-free glass: Most water and juice bottles are a pain to fill and wash
                            but the wide mouth on these bottles make everything from filling to cleanup easy. */}
                            {"\u2022"} {faker.commerce.productDescription()}
                        </Text>

                        <Text style={styles.text}>
                            {/* {" "}
                            {"\u2022"} Air and water-tight stainless steel cap won’t leak. Each cap is lined with a
                            rubber O-ring so it will never leave a leaky mess in your car or bag. Oxygen can’t get in to
                            break down the enzymes and ruin your juice{" "} */}
                            {"\u2022"} {faker.commerce.productDescription()}
                        </Text>
                        <Text style={styles.subheaderTitle}>Meet the seller</Text>
                        <View style={styles.profile}>
                            <Image
                                style={styles.profilePic}
                                source={require("../../assets/marketplace/profile-pic.png")}
                            />
                            <View style={styles.innerProfileContainer}>
                                <View>
                                    <Text style={styles.name}>JohnDoe</Text>
                                    <Text style={styles.joinDate}>joined 5 years ago</Text>
                                    <View style={styles.responsiveness}>
                                        <Icon name="comment" size={22} color="#8E8E8E" />
                                        <Text style={styles.responsivenessText}>Very responsive</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.ratings}>4.0</Text>
                                    <Rating type="star" ratingCount={5} imageSize={14} startingValue={4} />
                                    <Text style={styles.reviews}>100 reviews</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Chat</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButtonContainer}>
                                <Text style={styles.buyButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </OverlayCard>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    overlayContainer: {
        position: "relative",
        top: 350,
        width: "100%",
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        position: "absolute",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleText: {
        fontFamily: "DMSans-Bold",
        fontSize: 24,
    },
    price: {
        fontFamily: "DMSans-Regular",
        fontSize: 18,
        color: "#56884E",
        marginTop: 4,
    },
    listingDetailContainer: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    listedDate: {
        fontFamily: "DMSans-Regular",
        fontSize: 15,
    },
    userList: {
        color: "#56884E",
        fontSize: 15,
    },
    subheaderTitle: {
        fontSize: 20,
        color: "#5A5A5A",
        fontFamily: "DMSans-Bold",
        marginTop: 18,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    text: {
        fontFamily: "DMSans-Regular",
        fontSize: 16,
        marginTop: 5,
    },
    responsiveness: {
        flexDirection: "row",
        alignItems: "center",
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        color: "#56884E",
        fontFamily: "DMSans-Regular",
    },
    joinDate: {
        color: "#959494",
        fontFamily: "DMSans-Regular",
        fontSize: 14,
    },
    responsivenessText: {
        color: "#959494",
        fontSize: 14,
        fontFamily: "DMSans-Regular",
    },
    profilePic: {
        marginTop: 10,
        marginRight: 10,
        width: 60,
        height: 60,
    },
    innerProfileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    ratings: {
        fontFamily: "DMSans-Bold",
        fontSize: 22,
    },
    reviews: {
        color: "#C4C4C4",
        fontSize: 14,
    },
    buyButtonContainer: {
        width: "70%",
        borderRadius: 8,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: MAIN_THEME.COLOR.GREEN,
    },
    buttonContainer: {
        width: "25%",
        borderRadius: 8,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: MAIN_THEME.COLOR.GREEN,
    },
    buttonText: {
        color: MAIN_THEME.COLOR.GREEN,
        fontFamily: "DMSans-Bold",
        fontSize: 17,
    },
    buyButtonText: {
        color: "white",
        fontFamily: "DMSans-Bold",
        fontSize: 17,
    },
    buttons: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 20,
    },
});
