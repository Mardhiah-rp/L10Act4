import React from "react";
import {View, Text, SectionList, StyleSheet, StatusBar,} from "react-native";
import MenuItem from "./CardItem";
import { useFonts, PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";

export default function App() {
    let [fontsLoaded] = useFonts({
        PlayfairDisplay_700Bold,
    });

    if (!fontsLoaded) return null;

    const menuData = [
        {
            title: "Cakes",
            data: [
                {
                    title: "Fudgy Brownies",
                    price: "$20.0 / $25.0",
                    description:
                        "Rich, indulgent brownies with a molten center. Perfect treat for weekends.",
                    image: require("./img/brownie.png"),
                },
                {
                    title: "Tiramisu Cake",
                    price: "$12.0 / $30.0",
                    description:
                        "Espresso-soaked ladyfingers layered with creamy mascarpone.",
                    image: require("./img/tiramisu.png"),
                },
            ],
        },
        {
            title: "Bread & Cookies",
            data: [
                {
                    title: "Banana Bread",
                    price: "$10.0",
                    description:
                        "Moist banana bread baked with cinnamon and ripe banana goodness.",
                    image: require("./img/bananabread.png"),
                },
                {
                    title: "Choco Chip Cookies",
                    price: "$12.0 / $22.0",
                    description:
                        "Crispy edges, soft center, loaded with gooey chocolate chips.",
                    image: require("./img/chocochipcookies.png"),
                },
            ],
        },
        {
            title: "Mini Cake Cups",
            data: [
                {
                    title: "Mini Cheesecake Cups",
                    price: "$6.0",
                    description:
                        "Creamy cheesecake topped with strawberry or blueberry compote.",
                    image: require("./img/minicheesecakecup.png"),
                },
                {
                    title: "Mini Cake Cups",
                    price: "$5.0",
                    description:
                        "Oreo chocolate or caramel banana — the perfect on-the-go treat.",
                    image: require("./img/minicakecups.png"),
                },
            ],
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <Text style={styles.header}>MarLia Bakes</Text>

            <SectionList
                sections={menuData}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({ item, index }) => (
                    <MenuItem item={item} index={index} />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                contentContainerStyle={{ paddingBottom: 40 }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F1E8",
        paddingTop: 40,
    },

    header: {
        fontSize: 32,
        fontFamily: "PlayfairDisplay_700Bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#5A4232",
    },

    sectionHeader: {
        fontSize: 26,
        fontFamily: "PlayfairDisplay_700Bold",
        color: "#6B4F3A",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
});
