import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
const image = require("../../assets/images/Saly-20.png");
import UserRankingItem from "../../components/UserRankingItem";

const portfolioCoins = [{
  id: "0",
  name: "DAI",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  netWorth: 65772
},
{
  id: "1",
  name: "Dollar Thether",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  netWorth: 65772
},
{
  id: "2",
  name: "Ethereum",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  netWorth: 65772
},
{
  id: "3",
  name: "Bitcoin",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  netWorth: 65772
},
]

const RankingScreen = () => {

  return (
    <View style={styles.root}>
      <FlatList style={{ width: "100%" }} data={portfolioCoins} renderItem={({ item, index }) => <UserRankingItem user={item} place={index} key={item.id} />}
        ListHeaderComponentStyle={{alignItems: "center"}} showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image}/>
            <Text style={styles.label}>Rankings</Text>
          </>
        )} />
    </View>
  );
};

export default RankingScreen;