import { Icon } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MAIN_THEME } from "../../../common/constants";

type TNearestBinCard = {
    location: string | null;
    address: string;
    distance: number;
    handleOnPress: () => void;
};

export const NearestBinCard = ({ location, address, distance, handleOnPress }: TNearestBinCard) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <View style={styles.iconTextWrapperContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="map-pin" type="feather" color={MAIN_THEME.COLOR.GREEN} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.locationText}>{location || "Singapore"}</Text>
                    <Text style={styles.addressText}>{address}</Text>
                </View>
            </View>
            <View style={styles.distanceContainer}>
                <Text style={styles.distanceText}>{distance}m</Text>
            </View>
        </TouchableOpacity>
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
        borderRadius: 10,
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        padding: 3,
        backgroundColor: MAIN_THEME.COLOR.LIGHT_GREEN,
        width: 45,
        height: 45,
    },
    textContainer: {
        display: "flex",
        marginLeft: 10,
        justifyContent: "space-between",
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
    iconTextWrapperContainer: {
        display: "flex",
        flexDirection: "row",
    },
});
