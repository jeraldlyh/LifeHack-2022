import { StyleSheet, View, Text } from "react-native";
import { OverlayCard } from "../../../common/components";
import { MAIN_THEME } from "../../../common/constants";
import { NearestBinCard } from "./nearestBinCard";
import { useEffect, useState } from "react";
import { MapService } from "../../../services";
import { TSectionProps } from "./types";
import { BackButton } from "../../../common/components/backButton";
import { ScrollView } from "react-native-gesture-handler";

export const NearestBinSection = ({ section, setSection, currentLocation }: TSectionProps) => {
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
                <BackButton handleOnPress={() => setSection({ key: section.key - 1 })} />
                <Text style={styles.overlayTitle}>Nearest recycling locations</Text>
                <ScrollView style={styles.nearestBinContainer}>{nearestBins}</ScrollView>
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
