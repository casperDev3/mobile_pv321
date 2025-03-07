import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import api from '../utils/api.ts';

// const test = async ()=>{
//   const prod = await api.getAll('products');
//   console.log('s+++', prod);
//   console.log('s+++ test');
// };

const HomeScreen = () => {
  const [count, setCount] = useState<number>(0);
  const [products, setProducts] = useState<any>([]);
  // test();
  useEffect(() => {
    api.getAll('products').then(prod => {
      setProducts(prod);
    });
    console.log('___test');
  }, []);
  return (
    <>
      <View>
        <Text style={styles.text}>Home Screen</Text>
      </View>
      <View>
        <Text>Counter: {count}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Збільшити на 1</Text>
        </TouchableOpacity>
        <Button title={'Зменшити на 1'} onPress={() => setCount(count - 1)} />
      </View>
      <View>
        {products.length > 0 &&
          products.map(
            (
              product: {
                title: string,
                id: number,
              },
              // i: Key | null | undefined,
            ) => (
              <Text key={product.id} style={styles.text}>
                {product.title}
              </Text>
            ),
          )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#f00',
  },
});

export default HomeScreen;
