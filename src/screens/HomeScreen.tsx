import {Button, ScrollView, View} from 'react-native';
import {useState, useEffect} from 'react';
import api from '../utils/api.ts';
import Statistics from '../components/Statistics.tsx';
import ProductCard from '../components/ProductCard.tsx';

const HomeScreen = ({navigation}: any) => {
  const [products, setProducts] = useState<any>([]);
  // test();
  useEffect(() => {
    api.getAll('products').then(prod => {
      setProducts(prod);
    });
  }, []);
  return (
    <>
      <Button title={'Про нас'} onPress={() => navigation.navigate('About')} />
      <Statistics />
      <ScrollView>
        {products.length > 0 &&
          products.map(
            (
              product: {
                title: string;
                id: number;
              },
              // i: Key | null | undefined,
            ) => <ProductCard product={product} key={product.id} />,
          )}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
