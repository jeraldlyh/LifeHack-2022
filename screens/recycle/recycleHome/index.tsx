import { Text } from "react-native";
import { Container } from "../../../common/components";
// import { TScreenProp } from "../../types";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";
import SuggestedArticles from "./components/suggestedArticles";

const RecycleHome = ({navigation}: any) => {
    return (
        <Container scrollable>
            <Categories />
            <SuggestedArticles navigation={navigation}/>
        </Container>
    );
};

export default RecycleHome;
