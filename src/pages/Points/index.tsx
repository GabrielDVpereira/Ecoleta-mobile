import React from "react";
import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import Constants from "expo-constants";
import styles from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";
const Points = ({ navigation }) => (
  <>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#34cb79" />
      </TouchableOpacity>

      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.description}>Econtre no mapa um ponto de coleta</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -16.0076974,
            longitude: -48.0902776,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
          }}
        >
          <Marker
            coordinate={{
              latitude: -16.0076974,
              longitude: -48.0902776,
            }}
            styles={styles.mapMarker}
            onPress={() => {
              navigation.navigate("detail");
            }}
          >
            <View style={styles.mapMarkerContainer}>
              <Image
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1569180880150-df4eed93c90b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
                }}
                style={styles.mapMarkerImage}
              />
              <Text style={styles.mapMarkerTitle}>Mercado</Text>
            </View>
          </Marker>
        </MapView>
      </View>
    </View>
    <View style={styles.itemsContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
      >
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            width={42}
            height={42}
            uri="http://192.168.0.31:5000/uploads/baterias.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            width={42}
            height={42}
            uri="http://192.168.0.31:5000/uploads/baterias.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            width={42}
            height={42}
            uri="http://192.168.0.31:5000/uploads/baterias.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            width={42}
            height={42}
            uri="http://192.168.0.31:5000/uploads/baterias.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            width={42}
            height={42}
            uri="http://192.168.0.31:5000/uploads/baterias.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            width={42}
            height={42}
            uri="http://192.168.0.31:5000/uploads/baterias.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            width={42}
            height={42}
            uri="http://192.168.0.31:5000/uploads/baterias.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </>
);

export default Points;
