import { Icon } from "@rneui/base";
import { Fragment, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Container from "../../../common/components/container";
import { MAIN_THEME } from "../../../common/constants";
import CompetitionTab from "./components/competitionTab";
import { TScreenProp } from "../../types";
import CreateCompetitionModal from "./components/createCompetitionModalBody";
import { useModal } from "../../../providers/modal";

type TCreateNewButtonProps = {
    handlePress: () => void;
};

const CreateNewButton = ({ handlePress }: TCreateNewButtonProps) => {
    return (
        <TouchableOpacity style={styles.newBattleButton} onPress={handlePress}>
            <Icon name="add-outline" type="ionicon" color="#888888" />
            <Text style={styles.newBattleButtonText}>Create new battle</Text>
        </TouchableOpacity>
    );
};

const CompetitionHome = ({ navigation }: TScreenProp) => {
    const { setIsOpen, setModal } = useModal();
    const handlePress = () => {
        setModal({
            body: <CreateCompetitionModal />,
        });
        setIsOpen(true);
    };

    return (
        <Container>
            <CompetitionTab
                actionButton={<CreateNewButton handlePress={handlePress} />}
                navigation={navigation}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    newBattleButton: {
        marginTop: 29,
        width: "100%",
        paddingHorizontal: 26,
        paddingVertical: 12,
        backgroundColor: "white",
        borderRadius: 14,
        ...MAIN_THEME.SHADOW,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    newBattleButtonText: {
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
        flex: 1,
        color: "#888888",
    },
});

export default CompetitionHome;
