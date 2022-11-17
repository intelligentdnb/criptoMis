import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, Alert, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const image = require("../../../assets/images/Saly-31.png");
import styles from "./style";

const CoinExchangeScreen = () => {
    const [coinAmount, setCoinAmount] = useState("");
    const [coinUSDValue, setCoinUSDValue] = useState("");

    const maxUSD = 100000;

    const route = useRoute();


    const { coinData, isBuy } = route?.params;

    useEffect(() => {
        const amount = parseFloat(coinAmount);

        if (!amount && amount !== 0) {
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        };

        setCoinUSDValue((amount * coinData?.currentPrice).toString());

    }, [coinAmount]);

    useEffect(() => {
        const amount = parseFloat(coinUSDValue);

        if (!amount && amount !== 0) {
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        };

        setCoinAmount((amount / coinData?.currentPrice).toString());

    }, [coinUSDValue]);

    const onPlaceOrder = () => {
        if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
            Alert.alert("Error", `Not enough USD coins. Max: ${maxUSD}`);
            return;
        };
        if (!isBuy && parseFloat(coinAmount) > coinData.amount) {
            Alert.alert("Error", `Not enough ${coinData.symbol} coins. Max ${coinData.amount}`);
            return;
        };
    };

    return (
        <ScrollView style={styles.scroll} alwaysBounceHorizontal={false} alwaysBounceVertical={false} keyboardDismissMode="on-drag">
            <View style={styles.root}>
                <Text style={styles.title}>
                    {isBuy ? "Buy " : "Sell "}
                    {coinData?.name}
                </Text>
                <Text style={styles.subtitle}>
                    1 {coinData?.symbol}
                    {" = "}
                    ${coinData?.currentPrice}
                </Text>
                <Image style={styles.image} source={image} />

                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="0" value={coinAmount} onChangeText={setCoinAmount} keyboardType="decimal-pad" />
                        <Text>{coinData?.symbol}</Text>
                    </View>

                    <Text style={{ fontSize: 40, padding: 5 }}>=</Text>


                    <View style={styles.inputContainer}>
                        <TextInput placeholder="0" value={coinUSDValue} onChangeText={setCoinUSDValue} keyboardType="decimal-pad" />
                        <Text>USD</Text>
                    </View>
                </View>
                <Pressable style={styles.button} onPress={onPlaceOrder} >
                    <Text style={styles.buttonText}>Place Order</Text>
                </Pressable>
                <View style={styles.information}>
                    <Text>
                        CryptoMis information
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default CoinExchangeScreen;