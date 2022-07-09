import React, { Fragment } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Card from "../../../../common/components/card";

type TCourseCardBodyProps = {
    description: string;
};

const CourseCardBody = ({ description }: TCourseCardBodyProps) => {
    return (
        <Fragment>
            <Text style={styles.cardDescription}>
                {description}
            </Text>
        </Fragment>
    );
};

const SuggestedArticles = () => {
    const SUGGESTED_ARTICLES = [
        {
            title: "All you need to know when recycling glass",
            description: "Broken glass can be recycled, but it might not be recycled to its previous state. It’s best to maintain the integrity of the recycled glass...",
            imageSrc: require("../../../../assets/article-1.jpg")
        },
        {
            title: "New to recycling? Here are 7 tips to recycle better",
            description: "Recycling is a regional enterprise, and each city has different rules, which complicates things for residents who just want to know ...",
            imageSrc: require("../../../../assets/article-2.jpg")
        },
        {
            title: "New to recycling? Here are 7 tips to recycle better",
            description: "Recycling is a regional enterprise, and each city has different rules, which complicates things for residents who just want to know ...",
            imageSrc: require("../../../../assets/article-2.jpg")
        },
        {
            title: "New to recycling? Here are 7 tips to recycle better",
            description: "Recycling is a regional enterprise, and each city has different rules, which complicates things for residents who just want to know ...",
            imageSrc: require("../../../../assets/article-2.jpg")
        },
    ];

    return (
        <View style={styles.suggestedCoursesContainer}>
            <Text style={styles.suggestedCourseText}>Suggested Articles</Text>
            <ScrollView>
                {SUGGESTED_ARTICLES.map((article, index) => (
                    <Card
                        key={index}
                        title={article.title}
                        body={
                            <CourseCardBody
                                description={article.description}
                            />
                        }
                        imageSrc={article.imageSrc}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    suggestedCoursesContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 23,
    },
    suggestedCourseText: {
        fontFamily: "DMSans-Bold",
        fontSize: 20,
        marginBottom: 8,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        backgroundColor: "#F7F7F7",
        minHeight: 120,
        marginBottom: 10,
        justifyContent: "space-between",
    },
    cardDescription: {
        fontFamily: "DMSans-Regular",
        marginVertical: 5,
    },
    cardButton: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "#F0F0F0",
        borderRadius: 7,
    },
    cardButtonText: {
        color: "#91B48C",
    },
});

export default SuggestedArticles;
