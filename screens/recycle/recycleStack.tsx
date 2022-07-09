import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import CompetitionHome from "./competition";
import RecycleHome from "./recycleHome";
// import Header from "../../common/components/header";
import IndividualCourse from "./detail/individualCourse";
import Lesson from "./detail/lesson";
import CompetitionQuestion from "./competition/components/competitionQuestion";
import Article from "./article";

const Recycle = createStackNavigator();

const RecycleStack = () => {
    return (
        <Recycle.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Recycle.Screen
                name="CourseHome"
                component={RecycleHome}
                options={{ title: "Recycling" }}
            />
            <Recycle.Screen
                name="Article"
                component={Article}
                options={{ title: "Article" }}
            />

            {/* <Recycle.Screen
                name="CourseDetail"
                component={IndividualCourse}
                options={{ title: "Course Detail" }}
            />
            <Recycle.Screen name="Lesson" component={Lesson} />
            <Recycle.Screen
                name="CompetitionHome"
                component={CompetitionHome}
                options={{ title: "Competition" }}
            />
            <Recycle.Screen name="CompetitionQuestion" component={CompetitionQuestion}/> */}
        </Recycle.Navigator>
    );
};

export default RecycleStack;
