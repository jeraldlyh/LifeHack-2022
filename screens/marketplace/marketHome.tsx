import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Container } from "../../common/components";
import { SearchBar } from "../../common/components/searchBar";
import {
    cardboard,
    cloth,
    container,
    glassbottle,
    paperbox,
    plasticbottle,
    plasticcup,
} from "../../assets/marketplace";
import { ProductCard } from "../../common/components/marketplace/productCard";
import { TScreenProp } from "../../common/types";
import { Header } from "../../common/components/headers";

export const MarketplaceHome = ({ navigation }: TScreenProp) => {
    const productDetails = [
        { itemTitle: "Cardboard", price: "$2.00", image: cardboard },
        { itemTitle: "Glass Bottle", price: "$1.50", image: glassbottle },
        { itemTitle: "Plastic Cup", price: "$0.20", image: plasticcup },
        { itemTitle: "Cloth", price: "$5.00", image: cloth },
    ];

    const featuredProducts = [
        { itemTitle: "Plastic Bottle", price: "$1.00", image: plasticbottle },
        { itemTitle: "Container", price: "$2.00", image: container },
        { itemTitle: "Paper Box", price: "$1.00", image: paperbox },
    ];

    const navigateAboutItems = (title: string, image: ImageSourcePropType, price: string) => {
        navigation.push("AboutItem", { title: title, image: image, price: price });
    };
    return (
        <Container style={styles.container} scrollable={true}>
            <Header title="Marketplace" isRoot={true} />
            <SearchBar searchContainerStyle={{ marginTop: 20 }} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Latest Products</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <View style={styles.productsContainer}>
                {productDetails.map((data, index) => (
                    <ProductCard
                        key={index}
                        title={data.itemTitle}
                        price={data.price}
                        image={data.image}
                        itemsInARow={2}
                        onPressHandler={() => navigateAboutItems(data.itemTitle, data.image, data.price)}
                    />
                ))}
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Feature Products</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <View style={styles.productsContainer}>
                {featuredProducts.map((data, index) => (
                    <ProductCard
                        key={index}
                        title={data.itemTitle}
                        price={data.price}
                        image={data.image}
                        itemsInARow={3}
                        onPressHandler={() => navigateAboutItems(data.itemTitle, data.image, data.price)}
                    />
                ))}
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: "center",
        paddingBottom: 100,
    },
    title: {
        fontFamily: "DMSans-Regular",
        fontSize: 22,
    },
    headerContainer: {
        marginTop: 15,
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontFamily: "DMSans-Regular",
        fontSize: 20,
    },
    seeAll: {
        fontFamily: "DMSans-Regular",
        fontSize: 12,
        color: "#9D9D9D",
    },
    productsContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});
