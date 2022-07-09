import { StyleSheet, View, Text } from "react-native";
import { OverlayCard } from "../../../common/components";
import { MAIN_THEME } from "../../../common/constants";
import { NearestBinCard } from "./nearestBinCard";
import { TNearestBin, TSectionProps } from "./types";
import { BackButton } from "../../../common/components/backButton";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

type TNearestBinSectionProps = Pick<TSectionProps, "setSection" | "section"> & {
    nearestBins: TNearestBin[];
};

export const NearestBinSection = ({ section, setSection, nearestBins }: TNearestBinSectionProps) => {
    const renderNearestBins = () => {
        return nearestBins.map((o, index) => {
            const handleOnPress = () => {
                setSection({
                    key: 2,
                    metadata: { address: o.address, location: o.location, distance: o.distance, notes: o.notes },
                });
            };

            return (
                <NearestBinCard
                    key={index}
                    address={o.address}
                    location={o.location}
                    distance={o.distance}
                    handleOnPress={handleOnPress}
                />
            );
        });
    };

    return (
        <OverlayCard height={385}>
            <View style={styles.container}>
                <BackButton handleOnPress={() => setSection({ key: section.key - 1 })} />
                <Text style={styles.overlayTitle}>Nearest recycling locations</Text>
                <ScrollView style={styles.nearestBinContainer}>{renderNearestBins()}</ScrollView>
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
        marginVertical: 10,
    },
    nearestBinContainer: {
        display: "flex",
    },
});
