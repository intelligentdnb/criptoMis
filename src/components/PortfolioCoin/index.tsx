import React from 'react';
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

export interface PortfolioCoinProps {
    portfolioCoin: {
        image: string,
        name: string,
        symbol: string,
        amount: number,
        valueUSD?: number
    }
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
    const { portfolioCoin: { image, name, symbol, amount, valueUSD } } = props;

    const navigation = useNavigation();
    
    let spy = "CoinDetails" as never;

    return (
        <Pressable style={styles.root} onPress={() => navigation.navigate(spy)}>
            <View style={styles.left} >
                <Image style={styles.image} source={{ uri: image }} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: "flex-end"}} >
                <Text style={styles.name}>${valueUSD} </Text>
                <Text style={styles.symbol}>{symbol} {amount}</Text>
            </View>
        </Pressable>
    );
};

export default PortfolioCoin;
