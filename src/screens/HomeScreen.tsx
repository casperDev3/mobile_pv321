import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {
  useState,
  useEffect,
} from 'react';
import api from '../utils/api.ts';
import Statistics from "../components/Statistics.tsx";

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
      {/*<View>*/}
      {/*  <Text style={styles.text}>Home Screen</Text>*/}
      {/*</View>*/}
      {/*<View>*/}
      {/*  <Text>Counter: {count}</Text>*/}
      {/*  <TouchableOpacity onPress={() => setCount(count + 1)}>*/}
      {/*    <Text>Збільшити на 1</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <Button title={'Зменшити на 1'} onPress={() => setCount(count - 1)} />*/}
      {/*</View>*/}
      <Statistics/>
      <View>
        {products.length > 0 &&
          products.map(
            (
              product: {
                title: string;
                id: number;
              },
              // i: Key | null | undefined,
            ) => (
              <View style={styles.card} key={product.id}>
                <Text style={styles.text}>{product.title}</Text>
                <TouchableOpacity>
                  <Text style={styles.favText}>Favorite</Text>
                </TouchableOpacity>
              </View>
            ),
          )}
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

export default HomeScreen;
