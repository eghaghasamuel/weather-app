import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from '../constants';
import { WeekBar, ScreenHeaderBtn, CurrentDayInfo } from "../components";


const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.sunny}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.sunny},
                headerShadowVisible: false,
                // headerLeft: () =>(
                //     <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                // ),
                // headerRight: () =>(
                //     <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                // ),
                headerTitle: ""
            }}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style= {{
                    flex: 1
                }}>
                    <CurrentDayInfo/>
                    <WeekBar/>
                </View>
            </ScrollView>  
                
        </SafeAreaView>
    )
}

export default Home;