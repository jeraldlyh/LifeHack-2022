import { StyleSheet, View, Text } from "react-native";
import { OverlayCard } from "../../../common/components";
import { MAIN_THEME } from "../../../common/constants";
import { NearestBinCard } from "./nearestBinCard";
import { TSectionProps } from "./types";
import { RECYCLE_BIN_COORDINATES } from "../../../common/constants";
import { getDistance } from "geolib";
import * as Location from "expo-location";
import { Promise } from "bluebird";
import { sampleSize } from "lodash";
import { useEffect, useState } from "react";
import { AddressHelper } from "../../../utils";

type TCoordinates = {
    longitude: string;
    latitude: string;
};

export const NearestBinSection = ({ setSection, currentLocation }: TSectionProps) => {
    const [nearestBins, setNearestBins] = useState<JSX.Element[]>([]);

    useEffect(() => {
        loadNearestBins();
    }, []);

    const loadNearestBins = async () => {
        const result = await handlePromise(sampleSize(RECYCLE_BIN_COORDINATES, 30));
        const output = result.sort((a, b) => a.distance - b.distance).slice(0, 3);
        console.log(output);
        const bins = output.map((o) => (
            <NearestBinCard address={AddressHelper.formatAddress(o.address)} location="" distance={o.distance} />
        ));

        setNearestBins(bins);
    };

    const handlePromise = async (coordinates: TCoordinates[]) => {
        return await Promise.all(
            coordinates.map(async (coordinate) => {
                const addresses = await Location.reverseGeocodeAsync({
                    longitude: parseInt(coordinate.longitude, 10),
                    latitude: parseInt(coordinate.latitude, 10),
                });

                return {
                    longitude: coordinate.longitude,
                    latitude: coordinate.latitude,
                    distance: getDistance(
                        {
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                        },
                        {
                            latitude: coordinate.latitude,
                            longitude: coordinate.longitude,
                        },
                    ),
                    address: addresses[0],
                };
            }),
        );
    };

    return (
        <OverlayCard height={386}>
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
    },
});
