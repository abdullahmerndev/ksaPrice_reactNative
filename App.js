import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
 } from 'react-native';
import Header from './components/header';
import Homepage from './pages/homepage';
// import "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";

export default function App() {

  return (
    <SafeAreaView>
      <Homepage />

      {/* Using another method "FlatList" instead of "ScrollView" */}
      {/* <ScrollView style={styles.list}>
        {products.map((product) => {
          return (
            <View key={product.key} style={styles.listItem}>
              <Text>{product.productName}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </SafeAreaView>
  );
}

