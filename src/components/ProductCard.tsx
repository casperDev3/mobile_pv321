import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ProductCard = ({product}: any) => {
  return (
    <>
      <View style={styles.card} key={product.id}>
        <Text style={styles.text}>{product.title}</Text>
        <TouchableOpacity>
          <Text style={styles.favText}>Favorite</Text>
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
