import React from "react";
import { View, Image, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { plasticbottle } from "../../../assets/marketplace";
import { MAIN_THEME } from "../../constants";
import { TScreenProp } from "../../types";

type TProductProps = {
    image: ImageSourcePropType;
    title: string;
    price: string;
    itemsInARow: number;
    onPressHandler?: () => void;
};
export const ProductCard = ({ image, title, price, itemsInARow, onPressHandler }: TProductProps) => {
    return itemsInARow == 2 ? (
        <TouchableOpacity onPress={onPressHandler} style={{ marginTop: 10 }}>
            <Image source={image} style={{ height: 200, width: 165, borderRadius: 10 }} />
            <Text style={{ fontSize: 17, fontFamily: "DMSans-Bold", marginTop: 8 }}>{title}</Text>
            <Text style={{ fontSize: 15, fontFamily: "DMSans-Regular", color: MAIN_THEME.COLOR.GREEN }}>{price}</Text>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity onPress={onPressHandler} style={{ marginTop: 10 }}>
            <Image source={image} style={{ height: 140, width: 110, borderRadius: 10 }} />
            <Text style={{ fontSize: 17, fontFamily: "DMSans-Bold", marginTop: 8 }}>{title}</Text>
            <Text style={{ fontSize: 15, fontFamily: "DMSans-Regular", color: MAIN_THEME.COLOR.GREEN }}>{price}</Text>
        </TouchableOpacity>
    );
};
