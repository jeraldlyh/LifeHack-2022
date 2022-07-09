import React from "react"
import { View, Image, Text, ImageSourcePropType } from "react-native"
import { plasticbottle } from "../../../assets/marketplace"


type TSProductProps = {
    image: ImageSourcePropType,
    title: string,
    price: string,
    itemsInARow: number
}
export const ProductCard = ({ image, title, price, itemsInARow }: TSProductProps) => {
    return (
        itemsInARow == 2 ?
            <View style = {{marginTop:10}}>
                <Image source={image}
                    style={{ height: 185, width: 146, borderRadius: 10 }}
                />
                <Text style={{ fontSize: 15, fontFamily: "DMSans-Regular" }}>
                    {title}
                </Text>
                <Text style={{ fontSize: 13, fontFamily: "DMSans-Regular" }}>
                    {price}
                </Text>
            </View> :
            <View style = {{marginTop:10}}>
                <Image source={image}
                    style={{ height: 112, width: 94, borderRadius: 10 }}
                />
                <Text style={{ fontSize: 15, fontFamily: "DMSans-Regular" }}>
                    {title}
                </Text>
                <Text style={{ fontSize: 13, fontFamily: "DMSans-Regular" }}>
                    {price}
                </Text>
            </View>

    )
}