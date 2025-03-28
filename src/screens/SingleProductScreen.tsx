import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import api from '../utils/api.ts';
import {useDispatch} from 'react-redux';
import {addToFavorite} from '../store/slices/favoriteSlice.ts';
import SameProducts from '../components/SameProducts.tsx';

interface SPScreenProps {
  route: any;
}

const SingleProductScreen = ({route}: SPScreenProps) => {
  const {productId} = route.params;
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    api.getOne('products', productId).then(setProduct).catch(console.error);
  }, [productId]);

  if (!product) return null;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{uri: product.image}} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.category}>{product.category.toUpperCase()}</Text>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            ⭐ {product.rating.rate} ({product.rating.count})
          </Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => dispatch(addToFavorite(product.id))}>
          <Text style={styles.favoriteText}>Додати в улюблені</Text>
        </TouchableOpacity>
      </View>
      <SameProducts category={product.category} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    marginTop: -25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B8B8B',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
  },
  favoriteButton: {
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#FF6B6B',
    alignItems: 'center',
  },
  favoriteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SingleProductScreen;
