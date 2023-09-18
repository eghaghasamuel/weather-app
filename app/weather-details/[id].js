import { useState } from "react";
import { SafeAreaView, Stack, useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { icons, SIZES } from '../../constants'
import styles from './details.style'
import Animated, {BounceInRight, BounceInLeft} from "react-native-reanimated";


const day_insights = () => {
    const item = useLocalSearchParams();

    for (var i = 0; i < 2; i++) {
        console.log("INSIGHTS   " + item.sunrise)
    }
    let phase = ""
    switch (item.moon_phase) {
        case "First Quarter":
            phase = icons.first_quarter
            break
        case "Full Moon":
            phase = icons.full_moon
            break;
        case "Last Quarter":
            phase = icons.last_quarter
            break;
        case "New Moon":
            phase = icons.new_moon
            break;
        case "Waning Crescent":
            phase = icons.waning_crescent
            break;
        case "Waning Gibbous":
            phase = icons.waning_gibbous
            break;
        case "Waxing Gibbous":
            phase = icons.waxing_gibbous
            break;
        case "Waxing Crescent":
            phase = icons.waning_crescent
            break;
        default:
            phase = icons.new_moon
    }

    return (

        <View>
            <Stack.Screen options={{
                headerShadowVisible: false,
                headerTitle: ""
            }} />
            <View style={styles.containerTemp}>
                <Text style={styles.weatherTitle}>WEATHER DETAILS</Text>
                <Text style={styles.weatherMessage}>{item.date}</Text>
            </View>
            <Animated.View entering={BounceInLeft} style={styles.searchContainer}>
                <TouchableOpacity style={styles.weatherBtn} onPress={() => { }}>
                    <View style={styles.weatherData}>
                        <View style={styles.phase_img}>
                            <Image
                                source={icons.max_temp}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>Max Temp: {item.max_temp}</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <View style={styles.phase_img}>
                            <Image
                                source={icons.low_temp}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>Low Temp:{item.min_temp}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={BounceInRight} style={styles.searchContainer}>
                <TouchableOpacity style={styles.weatherBtn} onPress={() => { }}>

                    <View style={styles.weatherData1}>
                        <View style={styles.phase_img}>
                            <Image
                                source={icons.wind}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>Max wind: {item.wind} KM/H</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={BounceInLeft} style={styles.searchContainer}>
                <TouchableOpacity style={styles.weatherBtn} onPress={() => { }}>
                    <View style={styles.weatherData}>
                        <View style={styles.phase_img}>
                            <Image
                                source={icons.sunrise}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>{item.sunrise}</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <View style={styles.phase_img}>
                            <Image
                                source={icons.sunset}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>{item.sunset}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={BounceInRight} style={styles.searchContainer}>
                <TouchableOpacity style={styles.weatherBtn} onPress={() => { }}>
                    <View style={styles.weatherData}>
                        <View style={styles.phase_img}>
                            <Image
                                source={icons.moonrise}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>{item.moonrise}</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <View style={styles.phase_img}>
                            <Image
                                source={icons.moonset}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>{item.moonset}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={BounceInLeft} style={styles.searchContainer}>
                <TouchableOpacity style={styles.weatherBtn} onPress={() => { }}>

                    <View style={styles.weatherData1}>
                        <View style={styles.phase_img}>
                            <Image
                                source={phase}
                                resizeMode='contain'
                                style={styles.logoImage}
                            />
                        </View>
                        <Text style={styles.weatherMessage}>{item.moon_phase}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>


        </View>

    )
}

export default day_insights