import React from "react";
import { View, Text, StyleSheet, ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Container } from "../../common/components";
import { FEATURED_PRODUCTS, MAIN_THEME, RECYCLING_CENTER, SUGGESTED_ARTICLES } from "../../common/constants";
import { ProductCard } from "../../common/components/marketplace/productCard";
import { TScreenProp } from "../../common/types";
import Card from "../../common/components/card";
import { ScrollView } from "react-native-gesture-handler";

type CalendarProps = {
    iconName: string;
    text: string;
};

const Calendar = (props: CalendarProps) => {
    return (
        <View style={styles.progressCalendarContainer}>
            <Icon name={props.iconName} size={38} color={MAIN_THEME.COLOR.GREEN} />
            <Text style={{ fontFamily: "DMSans-Regular" }}>{props.text}</Text>
        </View>
    );
};

type TCourseCardBodyProps = {
    description: string;
};

const CourseCardBody = ({ description }: TCourseCardBodyProps) => {
    return <Text style={styles.cardDescription}>{description}</Text>;
};

type RecyclingCenterProps = {
    location: string;
    description: string;
    imageSrc: any;
};

const RecyclingCenter = (props: RecyclingCenterProps) => {
    return (
        <View style={styles.recyclingCenterItem}>
            <Image source={props.imageSrc} style={styles.recyclingCenterImage} resizeMode="cover" />
            <View style={styles.recyclingCenterText}>
                <Text style={{ fontFamily: "DMSans-Bold", fontSize: 16 }}>{props.location}</Text>
                <Text style={styles.recyclingCenterDescription}>{props.description}</Text>
            </View>
        </View>
    );
};

export const HomeScreen = ({ navigation }: TScreenProp) => {
    return (
        <Container>
            <ScrollView>
                <Text style={styles.headerText}>Welcome back,</Text>
                <Text style={styles.name}>John Doe</Text>

                {/* your progress */}
                <Text style={styles.sectionTitle}>Your progress</Text>
                <View style={styles.progressContainer}>
                    <View style={styles.dateChoices}>
                        <Calendar iconName="ios-calendar" text="Weekly" />
                        <Calendar iconName="ios-calendar-outline" text="Monthly" />
                        <Calendar iconName="ios-calendar-outline" text="Yearly" />
                    </View>
                    <View style={styles.progressSummaryContainer}>
                        <Text style={styles.numbers}>12 bottles</Text>
                        <View style={styles.verticleLine}></View>
                        <Text style={styles.numbers}>30 plastic bags</Text>
                        <View style={styles.verticleLine}></View>
                        <Text style={styles.numbers}>50 others</Text>
                    </View>
                </View>
                {/* recycling centers */}
                <View style={styles.titleContainer}>
                    <Text style={styles.sectionTitle}>Recycling centers</Text>
                    <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
                        <Text style={styles.cardButtonText}>Search location</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.recyclingCenterContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: 4 }}
                    >
                        {RECYCLING_CENTER.map((center, index) => (
                            <View key={index}>
                                <RecyclingCenter
                                    location={center.location}
                                    description={center.description}
                                    imageSrc={center.imageSrc}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>
                {/* items you may like */}
                <View style={styles.titleContainer}>
                    <Text style={styles.sectionTitle}>Items you may like</Text>
                    <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
                        <Text style={styles.cardButtonText}>Visit marketplace</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.productsContainer}>
                    {FEATURED_PRODUCTS.map((data, index) => (
                        <ProductCard
                            key={index}
                            title={data.itemTitle}
                            price={data.price}
                            image={data.image}
                            itemsInARow={3}
                        />
                    ))}
                </View>
                {/* recycling news */}
                <Text style={styles.sectionTitle}>Recycling news</Text>
                <View style={{ marginBottom: 20 }}>
                    {SUGGESTED_ARTICLES.map((article, index) => (
                        <TouchableOpacity key={index} onPress={() => {}}>
                            <Card
                                title={article.title}
                                body={<CourseCardBody description={article.description} />}
                                imageSrc={article.imageSrc}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "DMSans-Bold",
        fontSize: 25,
        marginTop: 20,
    },
    name: {
        fontFamily: "DMSans-Bold",
        fontSize: 25,
        color: MAIN_THEME.COLOR.GREEN,
        marginBottom: 25,
    },
    sectionTitle: {
        fontFamily: "DMSans-Bold",
        fontSize: 20,
        marginBottom: 10,
        marginTop: 14,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
    },
    progressContainer: {
        backgroundColor: MAIN_THEME.COLOR.LIGHT_GREEN,
        height: 160,
        borderRadius: 10,
    },
    progressCalendarContainer: {
        alignItems: "center",
        marginTop: 15,
    },
    progressSummaryContainer: {
        height: 40,
        backgroundColor: "white",
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    dateChoices: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    numbers: {
        fontSize: 13,
    },
    verticleLine: {
        height: "70%",
        width: 1,
        backgroundColor: "#909090",
    },
    productsContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    cardDescription: {
        fontFamily: "DMSans-Regular",
        marginVertical: 5,
    },
    cardButton: {
        backgroundColor: MAIN_THEME.COLOR.GREEN,
        borderRadius: 7,
        marginLeft: "auto",
        height: 30,
        textAlign: "center",
        padding: 6,
    },
    cardButtonText: {
        color: "white",
    },
    recyclingCenterContainer: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        backgroundColor: "#F7F7F7",
        borderRadius: 16,
        height: 120,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
    },
    recyclingCenterItem: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 10,
    },
    recyclingCenterImage: {
        height: 80,
        width: 75,
        borderRadius: 14,
    },
    recyclingCenterText: {
        marginLeft: 20,
        marginTop: "auto",
        marginBottom: "auto",
    },
    recyclingCenterDescription: {
        fontFamily: "DMSans-Regular",
        fontSize: 14,
        width: 200,
        color: "#979797",
    },
});
