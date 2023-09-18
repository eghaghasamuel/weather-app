import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './DayCard.style'


const DayCard = ({ item, handleCardPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleCardPress(item)}
      >
        <TouchableOpacity style={styles.logoContainer}>

          <Image
            source={{uri: item?.imgurl}}
            resizeMode='contain'
            style={styles.logoImage}
          />

        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.temp}</Text>
        <Text style={styles.location}>{item.date} </Text>
       
      </TouchableOpacity>
    </View>
  )
}

export default DayCard