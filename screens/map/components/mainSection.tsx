import { Text, View, StyleSheet } from "react-native";
import { MAIN_THEME } from "../../../common/constants";
import { OverlayCard, Button } from "../../../common/components";
import { Label } from "./label";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import { TSectionProps } from "./types";

export const MainSection = ({ currentLocation, setSection }: TSectionProps) => {
    const [selectedOption, setSelectedOption] = useState<string>();

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

    const handleOnPress = (key: string) => {
        setSelectedOption(key);
    };

    const handleSaveAddress = () => {
        // save DB
        setSection(1);
    };

    return (
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

                <Button
                    text="Save Address"
                    buttonStyle={{ justifyContent: "flex-end" }}
                    handleOnPress={handleSaveAddress}
                />
            </View>
        </OverlayCard>
    );
};

const styles = StyleSheet.create({
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
