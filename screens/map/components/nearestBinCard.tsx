import { Icon } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";
import { MAIN_THEME } from "../../../common/constants";

type TNearestBinCard = {
    location: string;
    address: string;
    distance: number;
};

export const NearestBinCard = ({ location, address, distance }: TNearestBinCard) => {
    return (
        <View style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.iconContainer}>
                    <Icon name="map-pin" type="feather" color={MAIN_THEME.COLOR.GREEN} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.locationText}>{location}</Text>
                    <Text style={styles.addressText}>{address}</Text>
                </View>
            </View>
            <View style={styles.distanceContainer}>
                <Text style={styles.distanceText}>{distance}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 25,
        marginBottom: 7,
        justifyContent: "space-between",
    },
    iconContainer: {
        borderRadius: 999,
        padding: 3,
        backgroundColor: MAIN_THEME.COLOR.LIGHT_GREEN,
    },
    textContainer: {
        display: "flex",
        marginLeft: 10,
    },
    addressText: {
        color: "lightgray",
        fontFamily: "DMSans-Regular",
        fontSize: 14,
    },
    locationText: {
        fontFamily: "DMSans-Medium",
        fontSize: 18,
    },
    distanceContainer: {
        display: "flex",
        alignSelf: "flex-end",
    },
    distanceText: {
        fontFamily: "DMSans-Regular",
        color: MAIN_THEME.COLOR.GREEN,
    },
});
