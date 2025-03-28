import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import api from '../utils/api.ts';
import ProductCard from './ProductCard.tsx';
import {useNavigation} from "@react-navigation/native";

const SameProducts = ({ category }: any) => {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        api.getAll(`products/category/${category}`).then((data: any) => {
            setProducts(data);
        });
        // scroll to Top

    }, [category]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>✨ Схожі товари</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {products.length > 0
                    ? products.map((product: any) => (
                        <View style={styles.cardWrapper} key={product.id}>
                            <ProductCard navigation={navigation} product={product} />
                        </View>
                    ))
                    : <Text style={styles.noProducts}>Товари відсутні</Text>}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 8,
        paddingHorizontal: 16,
    },
    cardWrapper: {
        marginHorizontal: 8,
    },
    noProducts: {
        fontSize: 14,
        color: '#888',
        paddingHorizontal: 16,
    },
});

export default SameProducts;
