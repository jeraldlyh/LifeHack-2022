import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Icon } from "@rneui/base";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { CATEGORY_DATA, MAIN_THEME } from "../../../../common/constants";
import { useModal } from "../../../../providers/modal";
import Button from "../../../../common/components/button";
import { EDifficulty } from "../types";
import { CompetitionService } from "../../../../services/competition";

const CreateCompetitionModalBody = () => {
    const { setIsOpen } = useModal();
    const [isCourseOpen, setIsCourseOpen] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const courseOptions = CATEGORY_DATA.map((data) => ({
        label: data.category,
        value: data.category,
    }));

    const [isDifficultyOpen, setIsDifficultyOpen] = useState<boolean>(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const difficultyOptions = Object.values(EDifficulty)
        .filter((data) => typeof data === "string")
        .map((data) => ({
            label: data as string,
            value: data as string,
        }));

    const [amount, setAmount] = useState<string>("");

    const handlePress = async () => {
        if (selectedDifficulty && selectedCourse && amount) {
            await CompetitionService.createCompetition({
                difficulty: selectedDifficulty,
                course: selectedCourse,
                amount: amount,
            });
        }
        setIsOpen(false);
    };

    return (
        <View style={styles.modalContainer}>
            <TouchableOpacity
                onPress={() => setIsOpen(false)}
                style={styles.closeButton}
            >
                <Icon name="close-circle-outline" type="ionicon" />
            </TouchableOpacity>
            <View style={{ ...styles.inputContainer, zIndex: 102 }}>
                <Text style={styles.pickerTitle}>Course</Text>
                <DropDownPicker
                    placeholder="Select"
                    textStyle={{
                        fontFamily: "Poppins-Normal",
                    }}
                    containerStyle={{
                        marginTop: 10,
                    }}
                    disableBorderRadius
                    showArrowIcon
                    value={selectedCourse}
                    setValue={setSelectedCourse}
                    items={courseOptions}
                    multiple={false}
                    open={isCourseOpen}
                    setOpen={setIsCourseOpen}
                />
            </View>
            <View style={{ ...styles.inputContainer, zIndex: 101 }}>
                <Text style={styles.pickerTitle}>Difficulty</Text>
                <DropDownPicker
                    placeholder="Select"
                    textStyle={{
                        fontFamily: "Poppins-Normal",
                    }}
                    containerStyle={{
                        marginTop: 10,
                    }}
                    disableBorderRadius
                    showArrowIcon
                    value={selectedDifficulty}
                    setValue={setSelectedDifficulty}
                    items={difficultyOptions}
                    multiple={false}
                    open={isDifficultyOpen}
                    setOpen={setIsDifficultyOpen}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.pickerTitle}>Amount placed</Text>
                <TextInput
                    placeholder="Enter a value"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                    style={styles.amountInputContainer}
                    placeholderTextColor="black"
                />
            </View>
            <Button
                backgroundColor={MAIN_THEME.COLOR.GREEN}
                textColor="white"
                height={50}
                children="Create battle"
                onPress={handlePress}
                style={{
                    text: { fontFamily: "Poppins-SemiBold" },
                    background: { marginTop: 25 },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        width: "60%",
        minHeight: "25%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 14,
        backgroundColor: "white",
        padding: 25,
    },
    closeButton: {
        alignSelf: "flex-end",
        marginBottom: -10,
    },
    pickerTitle: {
        fontFamily: "Poppins-Bold",
        textAlign: "center",
    },
    inputContainer: {
        marginTop: 10,
    },
    amountInputWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
    },
    amountInputContainer: {
        borderColor: "black",
        borderRadius: 6,
        borderWidth: 1,
        paddingVertical: 13,
        paddingHorizontal: 10,
        fontFamily: "Poppins-Normal",
        marginTop: 10,
    },
});

export default CreateCompetitionModalBody;
