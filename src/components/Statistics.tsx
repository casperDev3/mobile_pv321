import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {clearFavorite} from '../store/slices/favoriteSlice.ts';

const Statistics = () => {
  const dispatch = useDispatch();
  const favProducts = useSelector(
    (state: RootState) => state.favorite.products,
  );
  return (
    <>
      <View style={styles.container}>
        {/* -- Favorite -- */}
        <Text style={styles.title}>Statistics</Text>
        <Text style={styles.favorite}>
          In Favorite List QTY: {favProducts.length}
        </Text>
        <Text style={styles.favorite}>
          In Favorite List IDs:{' '}
          {favProducts.map(id => (
            <Text key={id}>{id}, </Text>
          ))}
        </Text>
        <TouchableOpacity
          style={{
            marginBottom: 8,
          }}
          onPress={() => dispatch(clearFavorite())}>
          <Text>Clear All Favorites</Text>
        </TouchableOpacity>
        {/* -- Favorite -- */}

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
