import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Modal } from 'react-native-web';
import React, { useState } from "react";

const PopUp = () => {
const [modal, setModal] = useState(false);

    return (
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Text>ONPRESS</Text>
            </TouchableOpacity>
            <Modal isVisible={modal}>
                <View
                style={{backgroundColor:"white", padding:20, borderRadius:10}}>
                    <Text>I am good</Text>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({})

export default PopUp;
