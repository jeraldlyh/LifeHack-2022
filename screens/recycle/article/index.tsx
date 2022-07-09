import { faker } from "@faker-js/faker";
import React from "react";
import {
    ImageBackground,
    View,
    Text,
    StyleSheet,
    Image,
    ImageSourcePropType,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/EvilIcons";
import { OverlayCard } from "../../../common/components";

type TNavigationProps = {
    route: TRouteProp;
};

type TRouteProp = {
    params: TRouteParamsProp;
};

type TRouteParamsProp = {
    image: ImageSourcePropType;
    title: string;
};

const Article = (navigationRoute: TNavigationProps) => {
    faker.locale = "en_US";
    const name = faker.name.firstName() + " " + faker.name.lastName();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
            <ImageBackground source={navigationRoute.route.params.image} style={styles.backgroundImage} />
            <TouchableOpacity style={styles.cardButton}>
                <Icon size={20} name="pencil" color="green" />
                <Text style={styles.cardButtonText}>Take quiz</Text>
            </TouchableOpacity>
            <View style={styles.overlayContainer}>
                <OverlayCard height={900}>
                    <View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.titleText}>{navigationRoute.route.params.title}</Text>
                            <Icon size={25} name="heart" />
                        </View>
                        <View style={styles.listingDetailContainer}>
                            <Icon name="clock" size={15} style={{ marginRight: 2 }} />
                            <Text style={styles.listedDate}>1 week ago by</Text>
                            <Text style={styles.userList}> {name}</Text>
                        </View>
                        <Text style={styles.subheaderTitle}>1. {faker.lorem.lines(1)} </Text>
                        <Text style={styles.text}>{faker.lorem.paragraph()}</Text>
                        <Text style={styles.subheaderTitle}>2. {faker.lorem.lines(1)} </Text>
                        <Text style={styles.text}>{faker.lorem.paragraph()}</Text>
                        <Text style={styles.subheaderTitle}>3. {faker.lorem.lines(1)} </Text>
                        <Text style={styles.text}>{faker.lorem.paragraph()}</Text>
                        <Text style={styles.subheaderTitle}>4. {faker.lorem.lines(1)} </Text>
                        <Text style={styles.text}>{faker.lorem.paragraph()}</Text>

                        <Text style={styles.subheaderTitle}>About the author</Text>
                        <View style={styles.profile}>
                            <Image
                                style={styles.profilePic}
                                source={require("../../../assets/marketplace/profile-pic.png")}
                            />
                            <View style={styles.innerProfileContainer}>
                                <View>
                                    <Text style={styles.name}>{name}</Text>
                                    <Text style={styles.joinDate}>joined 5 years ago</Text>
                                    <View style={styles.responsiveness}>
                                        <Icon size={15} name="tag" />
                                        <Text style={styles.responsivenessText}>{faker.company.companyName()}</Text>
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
        </ScrollView>
    );
};
export default Article;

const styles = StyleSheet.create({
    overlayContainer: {
        position: "relative",
        top: 200,
        height: "100%",
        width: "100%",
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        position: "absolute",
        opacity: 0.4,
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
    listingDetailContainer: {
        marginTop: 10,
        marginBottom: 5,
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
        color: "black",
        fontFamily: "DMSans-Bold",
        marginTop: 10,
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
        fontSize: 17,
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
    cardButton: {
        flexDirection: "row",
        marginTop: 10,
        marginRight: 10,
        alignSelf: "flex-end",
        width: 95,
        padding: 8,
        backgroundColor: "#F0F0F0",
        borderRadius: 7,
    },
    cardButtonText: {
        color: "#91B48C",
    },
});
