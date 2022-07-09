import { StyleSheet, View, Text } from "react-native";
import { OverlayCard } from "../../../common/components";
import { MAIN_THEME } from "../../../common/constants";
import { NearestBinCard } from "./nearestBinCard";
import { useEffect, useState } from "react";
import { MapService } from "../../../services";
import { TSectionProps } from "./types";

export const NearestBinSection = ({ setSection, currentLocation }: TSectionProps) => {
    const [nearestBins, setNearestBins] = useState<JSX.Element[]>([]);

    useEffect(() => {
        loadNearestBins();
    }, []);

    const loadNearestBins = async () => {
        // TODO - add user id
        const result = await MapService.loadNearestBins("test", { currentLocation });
        const output = result.bins.sort((a, b) => a.distance - b.distance).slice(0, 3);

        const bins = output.map((o, index) => {
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

        setNearestBins(bins);
    };

    return (
        <OverlayCard height={385}>
            <View style={styles.container}>
                <Text style={styles.overlayTitle}>Nearest recycling location</Text>

                <View style={styles.nearestBinContainer}>{nearestBins}</View>
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
    },
    nearestBinContainer: {
        display: "flex",
        marginTop: 10,
    },
});
