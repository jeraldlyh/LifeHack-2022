import React, { Fragment, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Container } from "../../../common/components";
import { Button } from "../../../common/components/button";
import { MAIN_THEME } from "../../../common/constants";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { BlurView } from "expo-blur";
import ConfettiCannon from "react-native-confetti-cannon";

type TQuizProps = {};

export const QuizPage = ({ navigation }: any) => {
    const QuizQuestionBank = [{ question: "Breaking a piece of glass can make recycling easier", correctAnswer: 1 }];
    const [displayWin, setDisplayWin] = useState(false);
    const [displayLoss, setDisplayLoss] = useState(false);

    const currentQuestion = QuizQuestionBank[Math.floor(Math.random() * QuizQuestionBank.length)];

    const checkAnswer = () => {
        option == currentQuestion.correctAnswer ? setDisplayWin(true) : setDisplayLoss(true);
    };

    const [option, setOption] = useState(0);

    type TOptionButtonProps = {
        text: string;
    };
    const OptionButton = ({ text }: TOptionButtonProps) => {
        return text == "True" ? (
            <TouchableOpacity
                style={[
                    styles.optionButton,
                    option == 1 ? { backgroundColor: "#56884E" } : { backgroundColor: "white" },
                ]}
                onPress={() => setOption(1)}
            >
                <Text style={[styles.optionText, option == 1 ? { color: "white" } : { color: "black" }]}>{text}</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                style={[
                    styles.optionButton,
                    option == 2 ? { backgroundColor: "#56884E" } : { backgroundColor: "white" },
                ]}
                onPress={() => setOption(2)}
            >
                <Text style={[styles.optionText, option == 2 ? { color: "white" } : { color: "black" }]}>{text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {displayWin ? (
                <BlurView
                    intensity={95}
                    style={{
                        height: "120%",
                        position: "absolute",
                        width: "100%",
                        zIndex: 100,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
                    <View style={styles.quizResultContainer}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.quizResultHeader}>Congratulations!</Text>
                            <Text style={styles.quizResultText}>You earned 75 points!</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                marginTop: 30,
                                width: "80%",
                                backgroundColor: MAIN_THEME.COLOR.GREEN,
                                borderRadius: 14,
                                padding: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={[styles.buttonText]}>Exit Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            ) : null}
            {displayLoss ? (
                <BlurView
                    intensity={95}
                    style={{
                        height: "100%",
                        position: "absolute",
                        width: "100%",
                        zIndex: 100,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View style={styles.quizResultContainer}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.quizResultHeader}>Awww man!</Text>
                            <Text style={styles.quizResultText}>Try again another day!</Text>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{
                                    marginTop: 30,
                                    width: "80%",
                                    backgroundColor: MAIN_THEME.COLOR.GREEN,
                                    borderRadius: 14,
                                    padding: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={[styles.buttonText]}>Exit Quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            ) : null}

            <Container style={styles.container}>
                {/* <Text style={styles.questionHeader}>Breaking a piece of glass can make recycling easier</Text> */}
                <Text style={styles.questionHeader}>{currentQuestion.question}</Text>
                <CountdownCircleTimer
                    isPlaying
                    duration={7}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[7, 5, 2, 0]}
                    onComplete={checkAnswer}
                >
                    {({ remainingTime }) => <Text style={styles.remainingTime}>{remainingTime}</Text>}
                </CountdownCircleTimer>
                <OptionButton text="True" />
                <OptionButton text="False" />

                <TouchableOpacity onPress={() => checkAnswer()} style={[styles.buttonContainer]}>
                    <Text style={[styles.buttonText]}>Confirm</Text>
                </TouchableOpacity>
            </Container>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        alignItems: "center",
        width: "100%",
        flex: 1,
    },
    questionHeader: {
        fontSize: 24,
        fontFamily: "DMSans-Bold",
        textAlign: "center",
        marginBottom: 30,
    },
    optionText: {
        fontSize: 16,
        fontFamily: "DMSans-Bold",
    },
    optionButton: {
        width: "100%",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "#56884E",
        borderRadius: 14,
        marginTop: 30,
    },
    buttonContainer: {
        marginTop: 200,
        width: "100%",
        backgroundColor: MAIN_THEME.COLOR.GREEN,
        borderRadius: 14,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontFamily: "DMSans-Bold",
        fontSize: 17,
    },
    quizResultHeader: {
        fontFamily: "DMSans-Bold",
        fontSize: 16,
    },
    quizResultText: {
        fontFamily: "DMSans-Regular",
        fontSize: 16,
        marginTop: 20,
    },
    quizResultContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 200,
        borderRadius: 14,
        backgroundColor: "white",
        borderWidth: 0.5,
    },
    remainingTime: {
        fontFamily: "DMSans-Bold",
        fontSize: 30,
    },
});
