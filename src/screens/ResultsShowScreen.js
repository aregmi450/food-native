import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, Image} from "react-native";
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style = {styles.text}> {result.name} </Text>
            <FlatList
            data = {result.photos} 
            keyExtractor={(photo) => photo}
            renderItem = {( {item}) => {
                return <Image style={styles.image} source ={{ uri: item}} /> 
            }}
            />
            <Text style= {styles.text}> Contact No -  {result.phone} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginBottom: 3
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default ResultsShowScreen;