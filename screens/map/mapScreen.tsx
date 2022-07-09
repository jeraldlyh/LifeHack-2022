import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Container } from "../../common/components";
import { MainSection, NearestBinSection } from "./components";
import { TCurrentLocation, TNearestBin, TSection } from "./components/types";
import { AddressHelper } from "../../utils";
import { BinInfoSection } from "./components/binInfoSection";
import { MapService } from "../../services";
import { TScreenProp } from "../../common/types";

export const MapScreen = ({ navigation }: TScreenProp) => {
    const [section, setSection] = useState<TSection>({ key: 0 });
    const [currentLocation, setCurrentLocation] = useState<TCurrentLocation>();
    const [nearestBins, setNearestBins] = useState<TNearestBin[]>([]);
    const [rawBins, setRawBins] = useState<TNearestBin[]>([]);

    useEffect(() => {
        getCurrentLocation();
    }, []);

    useEffect(() => {
        if (currentLocation) {
            loadNearestBins();
        }
    }, [currentLocation]);

    const loadNearestBins = async () => {
        if (currentLocation) {
            // TODO - add user id
            const result = await MapService.loadNearestBins("test", { currentLocation });
            const output = result.bins.sort((a, b) => a.distance - b.distance).slice(0, 3);

            setRawBins(result.bins);
            setNearestBins(output);
        }
    };

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status) {
            let { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });

            if (coords) {
                const addresses = await Location.reverseGeocodeAsync({
                    longitude: coords.longitude,
                    latitude: coords.latitude,
                });
                setCurrentLocation({ ...coords, address: AddressHelper.formatAddress(addresses[0]) });
            }
        }
    };

    const renderSection = () => {
        if (currentLocation) {
            switch (section?.key) {
                case 0:
                    return <MainSection currentLocation={currentLocation} section={section} setSection={setSection} />;
                case 1:
                    return <NearestBinSection section={section} setSection={setSection} nearestBins={nearestBins} />;
                case 2:
                    return (
                        <BinInfoSection
                            currentLocation={currentLocation}
                            section={section}
                            setSection={setSection}
                            navigation={navigation}
                        />
                    );
            }
        }
    };

    if (!currentLocation) {
        return (
            <Container>
                <Text>Permission not granted for map view</Text>
            </Container>
        );
    }

    return (
        <Container>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{ longitude: currentLocation.longitude, latitude: currentLocation.latitude }}>
                    <Image style={styles.pin} source={require("../../assets/maps/placeholder.png")} />
                </Marker>
                {rawBins.map((bin, index) => (
                    <Marker
                        key={index}
                        coordinate={{ longitude: parseFloat(bin.longitude), latitude: parseFloat(bin.latitude) }}
                    >
                        <Image style={styles.pin} source={require("../../assets/maps/pin.png")} />
                    </Marker>
                ))}
            </MapView>
            <View style={styles.overlayContainer}>{renderSection()}</View>
        </Container>
    );
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    overlayContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
    },
    pin: {
        width: 30,
        height: 30,
    },
});
