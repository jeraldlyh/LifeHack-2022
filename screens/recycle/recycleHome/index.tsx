import { Text } from "react-native";
import { Container } from "../../../common/components";
// import { TScreenProp } from "../../types";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";
import SuggestedArticles from "./components/suggestedCourses";

const RecycleHome = () => {
    return (
        <Container scrollable>
            <Categories />
            <SuggestedArticles />
        </Container>
        // <Container scrollable>
        //     <BattleCard navigation={navigation} />
        //     <Categories />
        //     <SuggestedCourses />
        // </Container>
    );
};

export default RecycleHome;
