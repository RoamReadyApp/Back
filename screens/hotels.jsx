import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import a1 from '../assets/NESO/amazon.jpg';
import a2 from '../assets/NESO/amsterdam.jpg';
import a3 from '../assets/NESO/athens.jpg';
import b from '../assets/NESO/brasil.jpg';
import c from '../assets/NESO/china.jpg';
import d from '../assets/NESO/dubai.jpg';
import e from '../assets/NESO/egypt.jpg';
import f from '../assets/NESO/france.jpg';
import g from '../assets/NESO/germany.jpg';
import g2 from '../assets/NESO/greece.jpg';
import i from '../assets/NESO/indian.jpg';
import i2 from '../assets/NESO/iraq.jpg';
import i3 from '../assets/NESO/italy.jpg';
import j from '../assets/NESO/japan.jpg';
import l from '../assets/NESO/lebanon.jpg';
import l2 from '../assets/NESO/london.jpg';
import m from '../assets/NESO/morocco.jpg';
import o from '../assets/NESO/oman.jpg';
import p from '../assets/NESO/palestine.jpg';
import s from '../assets/NESO/spain.jpg';
import u from '../assets/NESO/united.jpg';


const Hotels = () => {
  
    return (
          
      <ScrollView  style={styles.scrollViewStyle} >
          <View style={styles.container}>
  
          <Text  style={{fontSize: 50,textAlign: "center" , marginBottom:20 , color:'#40e3ec'}} >
             CHOOSE COUNTRY 
          </Text>
          <View>
          </View>
          <View style={{ flex : 1 ,
                          flexDirection: "row",
                          flexWrap: 'wrap',  
                          justifyContent: "space-around",    
                          alignItems:"center",
                  }}>

            <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/test")}>
                      <Image source={a1} style={styles.imageButton} />
                  <Text style={styles.buttonText}>AMAZON</Text>
              </Pressable>
              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={a2} style={styles.imageButton} />
                  <Text style={styles.buttonText}>AMSTERDAM</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={a3} style={styles.imageButton} />
                  <Text style={styles.buttonText}>ATHENS</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={b} style={styles.imageButton} />
                  <Text style={styles.buttonText}>BRASIL</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={c} style={styles.imageButton} />
                  <Text style={styles.buttonText}>CHINA</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={d} style={styles.imageButton} />
                  <Text style={styles.buttonText}>DUBAI</Text>
              </Pressable>
  
              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={e} style={styles.imageButton} />
                  <Text style={styles.buttonText}>EGYPT</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={f} style={styles.imageButton} />
                  <Text style={styles.buttonText}>FRANCE</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={g} style={styles.imageButton} />
                  <Text style={styles.buttonText}>GERMANY</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={g2} style={styles.imageButton} />
                  <Text style={styles.buttonText}>GREECE</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={i} style={styles.imageButton} />
                  <Text style={styles.buttonText}>INDIAN</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={i2} style={styles.imageButton} />
                  <Text style={styles.buttonText}>IRAQ</Text>
              </Pressable>
  
              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                      ]} onPress={() => router.replace("/account/login")}>
                      <Image source={i3} style={styles.imageButton} />
                  <Text style={styles.buttonText}>ITALY</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={j} style={styles.imageButton} />
                  <Text style={styles.buttonText}>JAPAN</Text>
              </Pressable>
              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={l} style={styles.imageButton} />
                  <Text style={styles.buttonText}>LEBANON</Text>
              </Pressable>
  
              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                      ]}  onPress={() => router.replace("/account/login")}>
                      <Image source={l2} style={styles.imageButton} />
                  <Text style={styles.buttonText}>LONDON</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                      ]} 
                      onPress={() => router.replace("/account/login")}>
                      <Image source={m} style={styles.imageButton} />
                  <Text style={styles.buttonText}>MOROCCO</Text>
              </Pressable>
  
              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                      ]} onPress={() => router.replace("/account/login")}>
                      <Image source={o} style={styles.imageButton} />
                  <Text style={styles.buttonText}>OMAN</Text>
              </Pressable>
  
              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                      ]}  onPress={() => router.replace("/account/login")}>
                      <Image source={p} style={styles.imageButton} />
                  <Text style={styles.buttonText}>PALESTINE</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={s} style={styles.imageButton} />
                  <Text style={styles.buttonText}>SPAIN</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [
                          {
                              transform: pressed
                                  ? [{ scale: 1.1 }] // Scale up when pressed
                                  : [{ scale: 1 }]  // Normal scale
                          },
                          styles.button
                        ]}
                      onPress={() => router.replace("/account/login")}>
                      <Image source={u} style={styles.imageButton} />
                  <Text style={styles.buttonText}>UNITED STATES</Text>
              </Pressable>
  
              </View>
  
          </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
      scrollViewStyle: {
          flex: 1,
          backgroundColor: '#fff',
        },
    container: {
      flex: 1,
      alignItems: "center" ,
    },
    button: {
           
      width: '30%', 
      height:300,
      marginLeft: 30,
      marginTop: 20,
      justifyContent: "flex-end",
      alignItems:"center",
      backgroundColor: '#fff',
      paddingVertical: 30,
      paddingHorizontal: 20,
      borderRadius: 20,
      shadowColor: '#fff', // Optional shadow for iOS
      shadowOffset: { height: 1, width: 1 }, // Optional shadow for iOS
      shadowOpacity: 1, // Optional shadow for iOS
      shadowRadius: 1, // Optional shadow for iOS
      elevation: 2 // Optional elevation for Android
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      textAlign: 'center'
    },
    boldText: {
      fontWeight: 'bold',
      color: 'black', // optional if you want the bold text to have the same color
    },
  
    imageButton: {
      width: 180,
      height: 250,
    },
  
  });
  
  
  export default Hotels;
  