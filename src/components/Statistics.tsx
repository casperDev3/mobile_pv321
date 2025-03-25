import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../store/slices/favoriteSlice.ts';
import {RootState} from '../store';

const Statistics = () => {
  const dispatch = useDispatch();
  const favProducts = useSelector(
    (state: RootState) => state.favorite.products,
  );
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Statistics</Text>
        <Text style={styles.favorite}>In Favorite List: {favProducts.length}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableOpacity>
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
