import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Container, OverlayCard } from "../../common/components";
import { LocationGeocodedAddress, LocationObjectCoords } from "expo-location";
import { Label } from "./components/label";
import { Icon } from "@rneui/themed";
import { MAIN_THEME } from "../../common/constants";
import { Button } from "../../common/components/button";

type TCurrentLocation = LocationObjectCoords & {
    address: string;
};

export const MapScreen = () => {
    const recycleBins = [];
    const BUTTON_OPTIONS = [
        {
            key: "Home",
            type: "antdesign",
            icon: "home",
        },
        {
            key: "Office",
            type: "entypo",
            icon: "suitcase",
        },
        {
            key: "Others",
            type: "feather",
            icon: "map-pin",
        },
    ];
    const [currentLocation, setCurrentLocation] = useState<TCurrentLocation>();
    const [selectedOption, setSelectedOption] = useState<string>();

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
                setCurrentLocation({ ...coords, address: formatAddress(addresses[0]) });
            }
        }
    };

    const formatAddress = (address: LocationGeocodedAddress) => {
        let output = `${address.district} ${address.street}`;

        if (address.streetNumber) {
            output += ` St.${address.streetNumber}`;
        }

        if (address.postalCode) {
            output += ` ${address.postalCode}`;
        }
        return output;
    };

    const handleOnPress = (key: string) => {
        setSelectedOption(key);
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
            <View style={styles.overlayContainer}>
                <OverlayCard height={386}>
                    <View style={styles.overlayBody}>
                        <View>
                            <Text style={styles.overlayTitle}>Select Location</Text>
                            <Text style={styles.locationTitle}>Your Location</Text>
                            <Text style={styles.locationText}>{currentLocation.address}</Text>

                            <View style={styles.divider} />

                            <Text style={styles.locationTitle}>Save As</Text>
                            <View style={styles.buttonContainer}>
                                {BUTTON_OPTIONS.map((option, index) => {
                                    const isSelected = option.key === selectedOption;

                                    return (
                                        <Label
                                            key={index}
                                            icon={
                                                <Icon
                                                    name={option.icon}
                                                    type={option.type}
                                                    size={12}
                                                    color={isSelected ? "white" : MAIN_THEME.COLOR.GREEN}
                                                />
                                            }
                                            text={option.key}
                                            handleOnPress={() => handleOnPress(option.key)}
                                            isSelected={isSelected}
                                        />
                                    );
                                })}
                            </View>
                        </View>

                        <Button text="Save Address" buttonStyle={{ justifyContent: "flex-end" }} />
                    </View>
                </OverlayCard>
            </View>
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
    overlayBody: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
    },
    overlayTitle: {
        fontFamily: "DMSans-Bold",
        fontSize: 23,
    },
    locationTitle: {
        fontFamily: "DMSans-Regular",
        color: "gray",
        marginTop: 20,
    },
    locationText: {
        fontFamily: "DMSans-Regular",
        marginTop: 8,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "lightgray",
        marginTop: 5,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
    },
});
