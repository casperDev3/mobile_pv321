import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../store/slices/favoriteSlice.ts';

const screenWidth = Dimensions.get('window').width;

const ProductCard = ({ product, navigation }: any) => {
  const dispatch = useDispatch();

  return (
      <View style={styles.card} key={product.id}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => dispatch(addToFavorite(product.id))}
          >
            <Text style={styles.favoriteText}>Додати в улюблені</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.viewButton}
              onPress={() => navigation.navigate('SingleProductScreen', { productId: product.id })}
          >
            <Text style={styles.viewButtonText}>Переглянути</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    width: (screenWidth / 2) - 24,
    margin: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
    objectFit: 'contain',
  },
  category: {
    fontSize: 12,
    color: '#8B8B8B',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  buttonContainer: {
  },
  favoriteButton: {
    flex: 1,
    backgroundColor: '#FF6B6B',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 6,
  },
  favoriteText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ProductCard;
