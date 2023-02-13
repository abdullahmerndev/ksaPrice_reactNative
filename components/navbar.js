import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <FontAwesome5 name="comments-dollar" size={22} color="#fff" />
            <FontAwesome5 name="home" size={22} color="#fff" />
            <FontAwesome5 name="fire" size={22} color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#0db2db",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "end",
        padding: ".95rem",
        position: "sticky"
    }
});