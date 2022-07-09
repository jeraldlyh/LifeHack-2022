import { createStackNavigator } from "@react-navigation/stack";
import RecycleHome from "./recycleHome";
import Article from "./article";
import { QuizPage } from "./quiz/quiz";

const Recycle = createStackNavigator();

const RecycleStack = () => {
    return (
        <Recycle.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Recycle.Screen name="CourseHome" component={RecycleHome} options={{ title: "Recycling" }} />
            <Recycle.Screen name="Article" component={Article} options={{ title: "" }} />
            <Recycle.Screen name="Quiz" component={QuizPage} options={{ title: "Quiz" }} />
        </Recycle.Navigator>
    );
};

export default RecycleStack;
