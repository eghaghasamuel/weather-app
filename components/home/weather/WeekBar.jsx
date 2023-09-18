import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './WeekBar.style'
import { COLORS, SIZES } from '../../../constants'
import DayCard from '../../common/cards/weather/DayCard'
import { fetchLocations, fetchWeatherForecast } from '../../../hook/useFetch'
import { getData, storeData } from '../../../utils/index';


const WeekBar = () => {
  const router = useRouter()
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({})
  const [selectedJob, setSelectedJob] = useState();
  const [error, setError] = useState();


  const fetchMyWeatherData = async (city) => {

    let cityName = city;

    fetchWeatherForecast({
      cityName,
      days: '3'
    }).then(data => {
      // console.log('got data: ',data.forecast.forecastday);
      setWeather(data);
      setLoading(false)
    })

  }

  useEffect(() => {
    (async () => {
      let loc = await getData("loc")
      try {
        fetchMyWeatherData(loc)
      } catch (err) {
        setError(err)
      }

    })();


  }, []);

  let days = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thurday", "Friday", "Saturday"]
  let data_days = []
  let data_weather = []
  let d = weather.forecast?.forecastday
  let max_temp = weather.forecast?.forecastday[0].day.maxtemp_c
  let min_temp = weather.forecast?.forecastday[0].day.mintemp_c
  
  for (var i = 1; i < weather.forecast?.forecastday.length; i++) {
    let day = new Date(d[i].date);
    let n = days[day.getDay()]
    
    data_days.push({ "id": i, "date": n, "temp": d[i].day.avgtemp_c, "imgurl": "https:" + d[i].day.condition.icon} )
    d[i].astro.date = d[i].date
    d[i].astro.wind = d[i].day.maxwind_kph
    d[i].astro.max_temp =d[i].day.maxtemp_c
    d[i].astro.min_temp =d[i].day.mintemp_c
    data_weather.push(d[i].astro)
    console.log()
  }
  // console.log(data_weather[1].astro.sunrise)
  const handleCardPress = (item) => {
    router.push({pathname: `/weather-details/${item.id}`, params: data_weather[item.id-1]});
    
  };
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Max: {max_temp}</Text>
        <Text style={styles.headerTitle}>Min: {min_temp}</Text>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data_days}
            renderItem={({ item }) => (
              <DayCard
                item={item}
                handleCardPress={handleCardPress}
               
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
      <View style={styles.cardsContainer}>

        <Text></Text>

      </View>
      <View style={styles.cardsContainer}>
        <Text></Text>
      </View>
    </View>
  )
}

export default WeekBar