import {Text, View, StyleSheet} from 'react-native';

const Statistics = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Statistics</Text>
        <Text style={styles.favorite}>In Favorite List: 1</Text>
        <Text style={styles.cart}>In Cart List: 1</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  favorite: {
    fontSize: 14,
    color: 'red',
  },
  cart: {
    fontSize: 14,
    color: 'green',
  },
});

export default Statistics;
