import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";
import styles from "./styles";
const image = require("../../assets/images/Saly-10.png");
const btcIMG = require("../.././src/imagesEJ/btc.png");
const ethIMG = require("../.././src/imagesEJ/eth.png");
const usdtIMG = require("../.././src/imagesEJ/usdt.png");


const portfolioCoins = [{
  id: "1",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Dollar Thether",
  symbol: "USD",
  amount: 68.233,
  valueUSD: 89233
}, {
  id: "2",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Bitcoin",
  symbol: "USD",
  amount: 1.12,
  valueUSD: 19233
}
  , {
  id: "hdfdf3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "zfgh3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "eqwe3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "gdg3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "fasd3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "3311",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "32222",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "33323",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "33123asdd",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "3as3",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "312",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "311",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
  , {
  id: "32",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  name: "Ethereum",
  symbol: "USD",
  amount: 8.12,
  valueUSD: 22233
}
]

const PortfolioScreen = () => {

  return (
    <View style={styles.root}>
      <FlatList style={{ width: "100%" }} data={portfolioCoins} renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} key={item.id} />}
        ListHeaderComponentStyle={{alignItems: "center"}} showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio balance</Text>
              <Text style={styles.balance}>$69,857</Text>
            </View>
          </>
        )} />
    </View>
  );
};

export default PortfolioScreen;