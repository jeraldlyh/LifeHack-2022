import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import RecycleHome from "./recycleHome";
import IndividualCourse from "./detail/individualCourse";
import Lesson from "./detail/lesson";
import Article from "./article";

const Recycle = createStackNavigator();

const RecycleStack = () => {
    return (
        <Recycle.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Recycle.Screen name="CourseHome" component={RecycleHome} options={{ title: "Recycling" }} />
            <Recycle.Screen name="Article" component={Article} options={{ title: "Article" }} />
        </Recycle.Navigator>
    );
};

export default RecycleStack;
