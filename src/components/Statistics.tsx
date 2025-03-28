import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { clearFavorite } from '../store/slices/favoriteSlice.ts';

const Statistics = () => {
  const dispatch = useDispatch();
  const favProducts = useSelector((state: RootState) => state.favorite.products);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>📊 Статистика</Text>

        <View style={styles.statBlock}>
          <Text style={styles.statLabel}>❤️ Улюблені товари:</Text>
          <Text style={styles.statValue}>{favProducts.length}</Text>
        </View>

        <View style={styles.statBlock}>
          <Text style={styles.statLabel}>🆔 ID товарів:</Text>
          <Text style={styles.statValue}>{favProducts.join(', ') || '-'}</Text>
        </View>

        <TouchableOpacity style={styles.clearButton} onPress={() => dispatch(clearFavorite())}>
          <Text style={styles.clearButtonText}>Очистити улюблені</Text>
        </TouchableOpacity>

        <View style={styles.statBlock}>
          <Text style={styles.statLabel}>🛒 Товарів у кошику:</Text>
          <Text style={styles.statValue}>1</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    margin: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  statBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  clearButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 12,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Statistics;
