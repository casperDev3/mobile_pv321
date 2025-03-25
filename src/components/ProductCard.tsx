import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToFavorite} from '../store/slices/favoriteSlice.ts';

const ProductCard = ({product}: any) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.card} key={product.id}>
        <Text style={styles.text}>{product.title}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(addToFavorite(product.id));
          }}>
          <Text style={styles.favText}>Add to Favorite</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    marginBottom: 4,
  },
  favText: {
    color: '#f00',
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 6,
    margin: 6,
  },
});

export default ProductCard;
