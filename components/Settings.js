import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';

export default function Settings({ mapType, setMapType }) {
    const [selectedType, setSelectedType] = useState(mapType);

    return (
        <View style={styles.SettingsArea}>
            <Text style={styles.heading}>Map Type</Text>
            <Picker
                selectedValue={selectedType}
                onValueChange={(itemValue) => {
                    setSelectedType(itemValue);
                    setMapType(itemValue); 
                }}
            >
                <Picker.Item label="Standard" value="standard" />
                <Picker.Item label="Terrain" value="terrain" />
                <Picker.Item label="Satellite" value="satellite" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    SettingsArea: {
        marginTop: 32,
        marginLeft: 16,
    },
    heading: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
