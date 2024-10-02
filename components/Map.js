import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";




export default function Map(props) {
    const [marker, setMarker] = useState([])



   

  /*  useEffect(() => {
        (async () => {
            await getUserPosition();  
        })();
    }, []);
    */
    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker([...marker, coords]);
    }

    return (
        
        <MapView
            style={styles.map}
            region={props.location}
            mapType={props.mapType}
            onLongPress={showMarker}
            >
            {marker.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={marker}
                    title={`Marker ${index + 1}`}
        />
        ))}
            </MapView>
        
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: '100%',
        width: '100%'
    }
});
