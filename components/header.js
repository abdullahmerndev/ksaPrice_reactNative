import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Foundation } from '@expo/vector-icons';

export default function Header() {
    return ( 
        <View style={styles.header}>
            <Foundation name="align-left" size={24} color="#0db2db" />
            <Text style={styles.logo}>ksaprice</Text>
            <Foundation name="shopping-cart" size={24} color="#0db2db" />
        </View>
        );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem",
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5"
    },
    logo: {
        color: "#0db2db",
        fontSize: "1.25rem",
        fontWeight: "600",
        textTransform: "uppercase",
        fontFamily: "sans-serif"
    }
});