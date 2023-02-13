import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    TextInput,
    Image
} from "react-native";
import { SafeAreaView } from "react-native-web";
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Homepage() {
    const [products, setProducts] = useState([
        { id: 1, productName: 'iPhone'},
        { id: 2, productName: 'Lenovo laptop'},
        { id: 3, productName: 'Geyser'},
        { id: 4, productName: 'Digital watch'},
        { id: 5, productName: 'Iron'},
        { id: 6, productName: 'iPhone X'},
        { id: 7, productName: 'iPhone'},
        { id: 8, productName: 'Lenovo laptop'},
        { id: 9, productName: 'Geyser'},
        { id: 10, productName: 'Digital watch'},
        { id: 11, productName: 'Iron'},
        { id: 12, productName: 'iPhone X'},
        { id: 13, productName: 'iPhone'},
        { id: 14, productName: 'Lenovo laptop'},
        { id: 15, productName: 'Geyser'},
        { id: 16, productName: 'Digital watch'},
        { id: 17, productName: 'Iron'},
        { id: 18, productName: 'iPhone X'}
      ]);
    
      const pressHandler = (id) => {
        console.log(id);
        setProducts((currentItem) => {
          return currentItem.filter(ci => ci.id != id);
        });
      }

    return (
      <SafeAreaView style={styles.homepage}>
        <View style={styles.header}>
        <Header />
      </View>
      <StatusBar style="auto" />
      <View style={styles.searchBar}>
        <TextInput 
          placeholder="Looking for something specific..?" placeholderTextColor="#999" style={{width: "90%"}} />
        <FontAwesome name="search" size={24} color="#e0e0e0" />
      </View>
      <View style={styles.herounit}>
        <Image 
          source={{uri: 'https://assets.ksaprice.com/images/products/axiom/appleiphone13blue1.png.28a09086ea.999x165x205.png'}}
          style={{width: "100vw", height: 150}} />
      </View>

        <FlatList
          style={styles.list}
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.listItem}>{item.productName}</Text>
          </TouchableOpacity>
          )}
        />
        <Navbar />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  homepage: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
  },
  searchBar: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#efefef",
    margin: "auto",
    marginTop: 20,
    padding: 10,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  herounit: {
    margin: 10,
    backgroundColor: "pink",
    borderRadius: 6,
  },
  list: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'beige',
    flex: 1
  },
  listItem: {
    backgroundColor: 'white',
    marginBottom: 8,
    padding: 10
  }
})