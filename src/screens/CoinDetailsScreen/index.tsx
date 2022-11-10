import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style';
import { AntDesign } from '@expo/vector-icons';

const CoinDetailsScreen = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
    symbol: "USD",
    valueChange24H: -1.12,
    valueUSD: 18932
  })

  return (
    <View style={styles.root}>
      <View style={styles.left} >
      <Image style={styles.image} source={{ uri: coinData.image }} />
        <View>
          <Text style={styles.name}>{coinData.symbol}</Text>
          <Text style={styles.symbol} >{coinData.symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }} >
        <AntDesign name={"staro"} size={30} color={"#2f95dc"} />
      </View>
    </View>
  );
};




export default CoinDetailsScreen
