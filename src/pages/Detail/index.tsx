import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

const Detail = ({ navigation }) => (
  <>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#34cb79" />
      </TouchableOpacity>

      <Image
        style={styles.pointImage}
        source={{
          uri:
            "https://images.unsplash.com/photo-1569180880150-df4eed93c90b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        }}
      />

      <Text style={styles.pointName}>Mercado teste</Text>
      <Text style={styles.pointItems}>Lampadas</Text>

      <View style={styles.address}>
        <Text style={styles.addressTitle}>Endereço</Text>
        <Text style={styles.addressContent}>Brasilia, DF</Text>
      </View>
    </View>
    <View style={styles.footer}>
      <RectButton style={styles.button} onPress={() => {}}>
        <FontAwesome name="whatsapp" size={20} color="#fff" />
        <Text style={styles.buttonText}>Whatsapp</Text>
      </RectButton>
      <RectButton style={styles.button} onPress={() => {}}>
        <Icon name="mail" size={20} color="#fff" />
        <Text style={styles.buttonText}>Email</Text>
      </RectButton>
    </View>
  </>
);
export default Detail;
