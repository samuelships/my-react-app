import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Cart = () => {

    return(
        <SafeAreaView style={{flex : 1}}>
            <View style={{flex : 1, backgroundColor : "yellow"}}>
             <Text> This is yooo cart! </Text>
        </View>
        </SafeAreaView>
    );
}

export default Cart;