import React, { useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity,} from "react-native";

export default function CardItem({ item, index }) {
    const [expanded, setExpanded] = useState(false);

    const isImageLeft = index % 2 === 0;

    function handlePress() {
        setExpanded((prev) => !prev);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={handlePress}
            style={styles.cardWrapper}
        >
            <View
                style={[
                    styles.card,
                    { flexDirection: isImageLeft ? "row" : "row-reverse" },
                ]}
            >
                <Image source={item.image} style={styles.itemImage} />

                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>


                    {expanded && (
                        <Text style={styles.itemDesc}>{item.description}</Text>
                    )}

                    {!expanded && (
                        <Text style={styles.tapHint}>Tap to see description</Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    card: {
        backgroundColor: "#FFF7EC",
        borderRadius: 20,
        padding: 12,
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.70,
        shadowRadius: 50,
        elevation: 6,
    },
    itemImage: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        marginHorizontal: 10,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
    itemTitle: {
        fontSize: 20,
        fontFamily: "PlayfairDisplay_700Bold",
        color: "#4A3628",
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "600",
        color: "#7A5C47",
        marginBottom: 4,
    },
    itemDesc: {
        fontSize: 14,
        color: "#6C6C6C",
        marginTop: 4,
    },
    tapHint: {
        fontSize: 12,
        color: "#A1826A",
        marginTop: 4,
        fontStyle: "italic",
    },
});
