import React, { useState, useEffect } from 'react';

import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import api from '../utils/api.ts';
import Statistics from '../components/Statistics.tsx';
import ProductCard from '../components/ProductCard.tsx';

const HomeScreen = ({ navigation }: any) => {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        api.getAll('products').then(prod => {
            setProducts(prod);
        });
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('About')}>
                <Text style={styles.aboutButtonText}>Про нас</Text>
            </TouchableOpacity>
            <Statistics />
            <ScrollView contentContainerStyle={styles.productContainer}>
                {products.length > 0 &&
                    products.map((product: any) => (
                        <ProductCard navigation={navigation} product={product} key={product.id} />
                    ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    aboutButton: {
        backgroundColor: '#4A90E2',
        padding: 12,
        margin: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    aboutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
});

export default HomeScreen;
