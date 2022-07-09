import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Container } from "../../common/components";
import { LocationGeocodedAddress, LocationObjectCoords } from "expo-location";
import { MainSection, NearestBinSection } from "./components";
import { TCurrentLocation, TSection } from "./components/types";
import { AddressHelper } from "../../utils";
import { BinInfoSection } from "./components/binInfoSection";

export const MapScreen = () => {
    const [section, setSection] = useState<TSection>({ key: 0 });
    const [currentLocation, setCurrentLocation] = useState<TCurrentLocation>();

    useEffect(() => {
        getCurrentLocation();
    }, []);

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
                    return (
                        <NearestBinSection
                            currentLocation={currentLocation}
                            section={section}
                            setSection={setSection}
                        />
                    );
                case 2:
                    return (
                        <BinInfoSection currentLocation={currentLocation} section={section} setSection={setSection} />
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
            ></MapView>
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
});
