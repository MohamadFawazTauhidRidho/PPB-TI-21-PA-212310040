import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
          }}>
            <Image source={require('../../assets/icons/icon-ig-text.png')} />
            <View style={{ flexDirection: "row"  }}>
                <View style={{ marginHorizontal: 10 }}>
                    <Image source={require('../../assets/icons/icon-heart.png')} />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Image source={require('../../assets/icons/icon-paper-plane.png')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
