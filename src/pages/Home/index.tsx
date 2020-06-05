import React, { useEffect, useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

interface UF {
  sigla: string;
}
const Home: React.FC = ({ navigation }) => {
  const [ufs, setUfs] = useState<UF[]>([]);
  const [cities, setCities] = useState<String[]>([]);
  const [selectedCity, setSelectedCity] = useState<String[]>([]);
  const [selectedUf, setSelectedUf] = useState<String>("");

  console.log(cities);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const ufsResponse = response.data.map((uf) => uf.sigla);
        setUfs(ufsResponse);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const citiesResponse = response.data.map((city) => city.nome);
        setCities(citiesResponse);
      });
  }, [selectedUf]);

  return (
    <ImageBackground
      source={require("../../assets/home-background.png")}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a acharem pontos de coleta de forma eficiente
        </Text>
      </View>
      <View style={styles.footer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedUf(value)}
          items={ufs.map((uf) => ({ label: uf, value: uf }))}
          placeholder={{ label: "Selecione uma UF" }}
        />
        <View style={{ marginVertical: 15 }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCity(value)}
            items={cities.map((city) => ({ label: city, value: city }))}
            placeholder={{ label: "Selecione uma cidade" }}
          />
        </View>

        <RectButton
          style={styles.button}
          onPress={() => {
            navigation.navigate("points", {
              city: selectedCity,
              uf: selectedUf,
            });
          }}
        >
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
