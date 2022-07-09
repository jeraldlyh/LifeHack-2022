import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Icon } from "@rneui/base";

const Categories = () => {

    const CATEGORY_DATA = [
        {
            category: "Paper",
            imageSrc: require("../../../../assets/paper.jpg")
        },
        { category: "Metal", imageSrc: require("../../../../assets/metal.jpg") },
        {
            category: "Plastic",
            imageSrc: require("../../../../assets/plastic.jpg")
        },
    ];


    return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryHeaderContainer}>
                <Text style={styles.categoryText}>Categories</Text>
                <Text style={styles.seeAllText}>See all</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 4 }}
            >
                {CATEGORY_DATA.map((data, index) => (
                    <View key={index} style={styles.categoryCard}>
                        <Image
                            source={data.imageSrc}
                            style={{
                                height: 80,
                                width: "100%",
                                borderRadius: 10,
                            }}
                        />
                        <Text style={styles.categoryCardText}>
                            {data.category}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 22,
    },
    categoryHeaderContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    categoryText: {
        fontFamily: "DMSans-Bold",
        fontSize: 20,
    },
    seeAllText: {
        fontFamily: "DMSans-Bold",
        color: "#AEAEBF",
        alignSelf: "flex-end",
        fontSize: 15,
    },
    categoryCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 15,
        minHeight: 115,
        minWidth: 120,
        backgroundColor: "#F7F7F7",
        borderRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginRight: 25,
    },
    categoryCardText: {
        marginTop: 15,
        fontFamily: "DMSans-Bold",
    },
});

export default Categories;
