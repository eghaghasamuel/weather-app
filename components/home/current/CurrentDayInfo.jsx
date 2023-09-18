import { useState, useEffect,  } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './CurrentDayInfo.style'
import { icons, SIZES } from '../../../constants'
import * as Location from 'expo-location'
import {fetchLocations, fetchWeatherForecast} from '../../../hook/useFetch'
import { getData, storeData } from '../../../utils/index';


const CurrentDayInfo = () => {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({})
  const [address, setAddress] = useState({})
  

  useEffect(()=>{
    
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({enableHighAccuracy: true,accuracy: Location.Accuracy.High,});
      
      setLocations(currentLocation);
      storeData("loc",currentLocation.coords.latitude+","+currentLocation.coords.longitude)
      // console.log("Location:");
      // console.log(currentLocation);
      if(currentLocation.coords !=undefined){
        let loc = await getData("loc")
        // R
        fetchMyWeatherData(loc);
      }
    };
    getPermissions()
    
  }, []);

  const fetchMyWeatherData = async (city)=>{
   
    let cityName = city;
 
    fetchWeatherForecast({
      cityName,
      days: '1'
    }).then(data=>{
      // console.log('got data: ',data.forecast.forecastday);
      setWeather(data);
    })
    
  }


  let days = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thurday", "Friday", "Saturday"]
  const {location, current} = weather;
  const cond = "https:"+current?.condition.icon
  const date = new Date()
  const day = days[date.getDay()]
  console.log(current)
    return (
      <View>
        {/* <TouchableOpacity style={styles.locationButton} onPress={}>
          <Image
            source={icons.sun}
            resizeMode='contain'
            style={styles.weatherBtnImage}
          />
        </TouchableOpacity> */}
        
        <Text style={styles.dayWeek}>{location?.name}</Text>
        <View style={styles.searchContainer}>

          <TouchableOpacity style={styles.weatherBtn} onPress={() => { }}>
            <Image
              source={{uri: cond}}
              resizeMode='contain'
              style={styles.weatherBtnImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerTemp}>
          <Text style={styles.weatherMessage}>{current?.condition.text}</Text>
          <Text style={styles.temperature}>{current?.temp_c}°</Text>
          <Text style={styles.dayWeek}>{day}</Text>
        </View>
        
      </View>

    )
    //2´´´´
  }

  export default CurrentDayInfo


