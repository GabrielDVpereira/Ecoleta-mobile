import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import styles from "./styles";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import * as MailComposer from "expo-mail-composer";
import api from "../../services/api";

export interface Point {
  id: number;
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
  latitude: number;
  longitude: number;
}

export interface Item {
  title: string;
}

export interface PointResponse {
  point: Point;
  items: Item[];
}

const Detail = ({ navigation, route }) => {
  const { point_id } = route.params;
  const [pointInfo, setPoint] = useState<PointResponse>({});

  useEffect(() => {
    api.get(`points/${point_id}`).then((response) => {
      setPoint(response.data);
    });
  }, []);

  async function sendEmail() {
    await MailComposer.composeAsync({
      subject: "Interesse na coleta de resíduos",
      recipients: pointInfo.point.email,
    });
  }
  async function sendWhatsappMessage() {
    Linking.openURL(
      `whatsapp://send?text=Tenho interesse na coleta de resíduos&phone=${pointInfo.point.whatsapp}`
    );
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri: pointInfo.point?.image,
          }}
        />

        <Text style={styles.pointName}>{pointInfo.point?.name}</Text>
        <Text style={styles.pointItems}>
          {pointInfo.items?.map((item) => item.title).join(", ")}
        </Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>
            {pointInfo.point?.city}, {pointInfo.point?.uf}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={sendEmail}>
          <Icon name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>Email</Text>
        </RectButton>
      </View>
    </>
  );
};
export default Detail;
