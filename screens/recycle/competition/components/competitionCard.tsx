import { sample } from "lodash";
import React from "react";
import { Fragment } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { cybersecurityImage } from "../../../../assets/courses";
import Card from "../../../../common/components/card";
import { MAIN_THEME } from "../../../../common/constants";
import { TCompetition } from "../../../../hooks/useCompetition";
import { useProfile } from "../../../../hooks/useProfile";
import { CompetitionService } from "../../../../services/competition";

type TCompetitionProps = Pick<TCompetition, "quiz" | "host"> & {
    title: string;
    amount: string;
    competitionId: string;
    navigation: any;
};

type TCompetitionBodyProps = TCompetitionProps;

const CompetitionBody = ({
    amount,
    competitionId,
    navigation,
    quiz,
    title,
    host,
}: TCompetitionBodyProps) => {
    const { data, loading } = useProfile();

    if (loading) {
        return <Text>Loading profile...</Text>;
    }

    const handleJoin = async (id: string) => {
        await CompetitionService.joinCompetition(id);
        navigation.push("CompetitionQuestion", {
            question: quiz.question,
            amount,
            title,
            setter: host.name,
            options: quiz.options,
        });
    };

    return (
        <Fragment>
            <Text style={styles.competitionSubTitle}>
                1v1 Battle (${amount})
            </Text>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: data.avatar }}
                    style={styles.profileImage}
                />
                <View style={styles.profileDescriptionContainer}>
                    <Text style={styles.profileUsername}>{data.username}</Text>
                    <Text style={styles.profileText}>{data.unit}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handleJoin(competitionId)}
            >
                <Text
                    style={{
                        ...styles.buttonText,
                        color: sample(MAIN_THEME.ACCENTS),
                    }}
                >
                    Join battle
                </Text>
            </TouchableOpacity>
        </Fragment>
    );
};

const CompetitionCard = ({
    title,
    amount,
    competitionId,
    navigation,
    quiz,
    host,
}: TCompetitionProps) => {
    return (
        <Card
            title={title}
            body={
                <CompetitionBody
                    title={title}
                    amount={amount}
                    competitionId={competitionId}
                    navigation={navigation}
                    quiz={quiz}
                    host={host}
                />
            }
            imageSrc={cybersecurityImage}
        />
    );
};

const styles = StyleSheet.create({
    competitionSubTitleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    competitionSubTitle: {
        fontFamily: "Poppins-Light",
        marginBottom: 8,
    },
    profileContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 50,
    },
    profileDescriptionContainer: {
        display: "flex",
        alignItems: "flex-start",
    },
    profileUsername: {
        fontFamily: "Poppins-SemiBold",
        marginLeft: 10,
        fontSize: 18,
    },
    profileUnit: {
        fontFamily: "Poppins-Light",
        fontSize: 10,
    },
    profileImage: {
        borderRadius: 30,
        width: 45,
        height: 45,
    },
    profileText: {
        fontFamily: "Poppins-Normal",
        marginLeft: 10,
    },
    buttonContainer: {
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        padding: 4,
        paddingHorizontal: 4,
        minWidth: 150,
        marginTop: 11,
    },
    buttonText: {
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
    },
});

export default CompetitionCard;
