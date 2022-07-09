import { Text } from "react-native";
import { Container } from "../../../common/components";
import { SearchBar } from "../../../common/components/searchBar";
// import { TScreenProp } from "../../types";
import Categories from "./components/categories";
import SuggestedArticles from "./components/suggestedArticles";

const RecycleHome = ({navigation}: any) => {
    return (
        <Container scrollable>
            <SearchBar searchContainerStyle={{marginTop: 20}} />
            <Categories />
            <SuggestedArticles navigation={navigation}/>
        </Container>
    );
};

export default RecycleHome;
