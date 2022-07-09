import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { TScreenProp } from "../../../types";
import CompetitionList from "./competitionList";

type TCompetitionTabProps = TScreenProp & {
    actionButton: React.ReactNode;
};

const CompetitionTab = ({ actionButton, navigation }: TCompetitionTabProps) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "Beginner", title: "Beginner" },
        { key: "Intermediate", title: "Intermediate" },
        { key: "Advanced", title: "Advanced" },
    ]);

    const renderScene = ({ route }: any) => {
        return (
            <CompetitionList
                navigation={navigation}
                difficulty={route.key}
                actionButton={actionButton}
            />
        );
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    style={styles.tabBar}
                    indicatorStyle={styles.tabBarIndicator}
                    renderLabel={({ route, focused, color }) => (
                        <Text numberOfLines={1} style={styles.tabBarText}>
                            {route.title}
                        </Text>
                    )}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "transparent",
        width: "100%",
    },
    tabBarText: {
        fontFamily: "Poppins-Bold",
        textTransform: "uppercase",
        color: "black",
    },
    tabBarIndicator: {
        backgroundColor: "grey",
    },
});

export default CompetitionTab;
