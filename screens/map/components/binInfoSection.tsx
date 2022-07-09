import { View, Image, Text, StyleSheet } from "react-native";
import { OverlayCard } from "../../../common/components";
import { MAIN_THEME } from "../../../common/constants";
import { TSection, TSectionProps } from "./types";

type TBinInfoSectionProps = Partial<TSectionProps> & {
    section: TSection;
};

export const BinInfoSection = ({ section, setSection }: TBinInfoSectionProps) => {
    return (
        <OverlayCard height={385}>
            <View style={styles.container}>
                <Text style={styles.overlayTitle}>Nearest recycling location</Text>
                <Text style={styles.locationText}>{section.metadata.location}</Text>
                <Text style={styles.addressText}>{section.metadata.address}</Text>

                <Image source={require("../../../assets/maps/recycle_bin.png")} style={styles.imageContainer} />
                <Text style={styles.locationText}>Details</Text>
                <Text style={styles.detailsText}>{section.metadata.notes || "No notes can be found"}</Text>
            </View>
        </OverlayCard>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    overlayTitle: {
        fontFamily: "DMSans-Bold",
        fontSize: 23,
        color: MAIN_THEME.COLOR.GREEN,
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
