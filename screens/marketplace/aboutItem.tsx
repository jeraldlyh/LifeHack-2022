import { faker } from "@faker-js/faker";
import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/EvilIcons";
import { glassbottle } from "../../assets/marketplace";
import { OverlayCard } from "../../common/components";
import { TScreenProp } from "../../common/types";

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
    faker.locale = "en_US";
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={navigationRoute.route.params.image} style={styles.backgroundImage} />
            <View style={styles.overlayContainer}>
                <OverlayCard height={600}>
                    <View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.titleText}>{navigationRoute.route.params.title}</Text>
                            <Icon size={20} name="heart" />
                        </View>
                        <Text style={styles.price}>{navigationRoute.route.params.price}</Text>
                        <View style={styles.listingDetailContainer}>
                            <Icon name="clock" size={15} style={{ marginRight: 2 }} />
                            <Text style={styles.listedDate}>1 week ago by</Text>
                            <Text style={styles.userList}> JohnDoe</Text>
                        </View>
                        <Text style={styles.subheaderTitle}>About this item</Text>

                        <Text style={styles.text}>
                            {/* {"\u2022"} Durable lead-free glass: Most water and juice bottles are a pain to fill and wash
                            but the wide mouth on these bottles make everything from filling to cleanup easy. */}
                            {"\u2022"} {faker.lorem.paragraph()}
                        </Text>

                        <Text style={styles.text}>
                            {/* {" "}
                            {"\u2022"} Air and water-tight stainless steel cap won’t leak. Each cap is lined with a
                            rubber O-ring so it will never leave a leaky mess in your car or bag. Oxygen can’t get in to
                            break down the enzymes and ruin your juice{" "} */}
                            {"\u2022"} {faker.lorem.paragraph()}
                        </Text>
                        <Text style={styles.subheaderTitle}>Meet the seller</Text>
                        <View style={styles.profile}>
                            <Image
                                style={styles.profilePic}
                                source={require("../../assets/marketplace/profilepic.png")}
                            />
                            <View style={styles.innerProfileContainer}>
                                <View>
                                    <Text style={styles.name}>JohnDoe</Text>
                                    <Text style={styles.joinDate}>joined 5 years ago</Text>
                                    <View style={styles.responsiveness}>
                                        <Icon name="comment" />
                                        <Text style={styles.responsivenessText}>Very responsive</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.ratings}>4.0</Text>
                                    <Rating type="star" ratingCount={5} imageSize={10} startingValue={4} />
                                    <Text style={styles.reviews}>100 reviews</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </OverlayCard>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overlayContainer: {
        position: "absolute",
        top: 400,
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
        fontFamily: "DMSans-Regular",
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
    },
    userList: {
        color: "#56884E",
    },
    subheaderTitle: {
        fontSize: 20,
        color: "#5A5A5A",
        fontFamily: "DMSans-Regular",
        marginTop: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    text: {
        fontFamily: "DMSans-Regular",
        fontSize: 13,
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
        fontSize: 16,
        color: "#56884E",
        fontFamily: "DMSans-Regular",
    },
    joinDate: {
        color: "#959494",
        fontFamily: "DMSans-Regular",
        fontSize: 11,
    },
    responsivenessText: {
        color: "#959494",
        fontSize: 12,
        fontFamily: "DMSans-Regular",
    },
    profilePic: {
        marginTop: 10,
        marginRight: 10,
    },
    innerProfileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    ratings: {
        fontFamily: "DMSans-Bold",
        fontSize: 18,
    },
    reviews: {
        color: "#C4C4C4",
        fontSize: 10,
    },
});
