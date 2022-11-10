import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
const image = require("../../../assets/images/Saly-17.png");
import MarketCoin from "../../components/MarketCoin";


const portfolioCoins = [{
  id: "1",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Dollar Thether",
  symbol: "USD",
  valueChange24H: 68.233,
  valueUSD: 89233
}, {
  id: "2",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Bitcoin",
  symbol: "USD",
  valueChange24H: 1.12,
  valueUSD: 19233
}
  , {
  id: "hdfdf3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "zfgh3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: -22233
}
  , {
  id: "eqwe3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "gdg3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "fasd3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "3311",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: -2233
}
  , {
  id: "32222",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "33323",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "33123asdd",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: -22233
}
  , {
  id: "3as3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "312",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
  , {
  id: "311",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: -8.12,
  valueUSD: 22233
}
  , {
  id: "32",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  valueChange24H: 8.12,
  valueUSD: 22233
}
]

const MarketScreen = () => {

  return (
    <View style={styles.root}>
      <FlatList style={{ width: "100%" }} data={portfolioCoins} renderItem={({ item }) => <MarketCoin marketCoin={item} key={item.id} />}
        ListHeaderComponentStyle={{alignItems: "center"}} showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image}/>
            <Text style={styles.label}>Market</Text>
          </>
        )} />
    </View>
  );
};

export default MarketScreen;