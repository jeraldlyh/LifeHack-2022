import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { OverlayCard, BackButton } from "../../../common/components";
import { MAIN_THEME } from "../../../common/constants";
import { TSectionProps } from "./types";

export const BinInfoSection = ({ section, setSection }: TSectionProps) => {
    return (
        <OverlayCard height={385}>
            <View style={styles.container}>
                <BackButton handleOnPress={() => setSection({ key: section.key - 1 })} />

                <Text style={styles.overlayTitle}>Nearest recycling location</Text>
                <ScrollView>
                    <Text style={styles.locationText}>{section.metadata.location}</Text>
                    <Text style={styles.addressText}>{section.metadata.address}</Text>

                    <Image source={require("../../../assets/maps/recycle_bin.png")} style={styles.imageContainer} />
                    <Text style={styles.locationText}>Details</Text>
                    <Text style={styles.detailsText}>{section.metadata.notes || "No notes can be found"}</Text>
                </ScrollView>
            </View>
        </OverlayCard>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        overflow: "scroll",
    },
    overlayTitle: {
        fontFamily: "DMSans-Bold",
        fontSize: 23,
        color: MAIN_THEME.COLOR.GREEN,
        marginTop: 10,
        marginBottom: 20,
    },
    addressText: {
        color: "lightgray",
        fontFamily: "DMSans-Regular",
        fontSize: 14,
    },
    locationText: {
        fontFamily: "DMSans-Medium",
        fontSize: 18,
        marginBottom: 5,
    },
    imageContainer: {
        display: "flex",
        alignSelf: "center",
        overflow: "hidden",
        width: 330,
        height: 150,
        borderRadius: 10,
        marginVertical: 10,
    },
    detailsText: {
        marginTop: 3,
        fontFamily: "DMSans-Regular",
    },
});
