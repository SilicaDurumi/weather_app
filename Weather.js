import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "우박",
        subtitle: "우박이 떨어집니다 얼음 대신 넣어 먹어 보는 것은 어떨까요?"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "번개",
        subtitle: "번개의 속도는 초속 약 100,00km/s입니다."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "이슬비",
        subtitle: "우산을 쓰기도, 안 쓰기도 애매한 비입니다."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "비가 옵니다 우산은 챙기셨나요?"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subtitle: "눈이 옵니다."
    },
    Atmosphere: {
        iconName: "adjust",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "대기",
        subtitle: "흔하지는 않지만 있는 날씨입니다."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "청명",
        subtitle: "하늘을 관찰하기 좋은 날씨입니다."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "구름",
        subtitle: "구름을 관찰하기 좋은 날씨입니다."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개",
        subtitle: "안개가 꼈습니다."
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#D3CCE3", "#E9E4F0"],
        title: "안개",
        subtitle: "안개가 가시거리에 문제가 생길 정도로 꼈습니다."
    },
    Dust: {
        iconName: "blur-linear",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "황사",
        subtitle: "황사는 몸에 해로우니 마스크를 챙기시길 바랍니다."
    },
    Sand: {
        iconName: "blur-linear",
        gradient: ["#3E5151", "#DECBA4"],
        title: "모래",
        subtitle: "황사를 넘어서 아예 모래가 넘어옵니다!"
    },
    Ash: {
        iconName: "blur-linear",
        gradient: ["#434343", "#000000"],
        title: "재",
        subtitle: "크나큰 화재가 생겼었나 보군요."
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#868f96", "#596164"],
        title: "스콜",
        subtitle: "우산이 멀쩡하길 빕니다."
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "토네이도",
        subtitle: "집에만 있는 것이 좋겠군요 집이 날아가지 않는다면요."
    }
};
export default function Weather({ temp, condition }){
    return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}} >
            <View>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(
        [
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Haze", 
        "Mist",
        "Smoke",
        "Dust",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]
    ).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textShadowColor: "black",
        textShadowOffset: {width: 0.5, height: 0.5}
    },
    subtitle:{
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textShadowColor: "black",
        textShadowOffset: {width: 0.5, height: 0.5}

    },
    textContainer: {
       paddingHorizontal: 20,
       alignItems: "flex-start",
    }
});