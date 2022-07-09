import React from "react";
import { View, Image, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { plasticbottle } from "../../../assets/marketplace";
import { TScreenProp } from "../../types";

type TProductProps = {
    image: ImageSourcePropType;
    title: string;
    price: string;
    itemsInARow: number;
    onPressHandler: ()=>void;
};
export const ProductCard = ({ image, title, price, itemsInARow, onPressHandler }: TProductProps) => {
    return itemsInARow == 2 ? (
        <TouchableOpacity
            onPress={onPressHandler}
            style={{ marginTop: 10 }}
        >
            <Image source={image} style={{ height: 185, width: 146, borderRadius: 10 }} />
            <Text style={{ fontSize: 15, fontFamily: "DMSans-Regular" }}>{title}</Text>
            <Text style={{ fontSize: 13, fontFamily: "DMSans-Regular" }}>{price}</Text>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity
            onPress={onPressHandler}
            style={{ marginTop: 10 }}
        >
            <Image source={image} style={{ height: 112, width: 94, borderRadius: 10 }} />
            <Text style={{ fontSize: 15, fontFamily: "DMSans-Regular" }}>{title}</Text>
            <Text style={{ fontSize: 13, fontFamily: "DMSans-Regular" }}>{price}</Text>
        </TouchableOpacity>
    );
};
