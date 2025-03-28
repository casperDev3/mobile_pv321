import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "../store";

const AboutScreen = ({navigation}: any) => {
    const favProducts = useSelector((state: RootState)=> state.favorite.products)
  return (
    <>
      <View>
        <Text style={styles.text}>About Screen</Text>
          <Text>FAV Products QTY: {favProducts.length}</Text>
          <Text>FAV Products IDs: {favProducts}</Text>
        <Button title={'Домашня'} onPress={() => navigation.navigate('Home')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#f00',
  },
});

export default AboutScreen;
