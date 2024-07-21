import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import { formatCurrency } from '../lib/utils';
import { useEffect, useRef } from 'react';
import { Price } from './Price';

const ProductCard = ({ product }) => {
  return (
    <View key={product.id} className="flex-row bg-slate-400/10 p-4 rounded-xl gap-4 mb-10">
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}
            className="text-2xl font-bold text-white text-opacity-80"
          >{product.title}</Text>
          <Price price={product.price} />
          <Text style={styles.productDescription} 
            className=" text-white text-opacity-50"
          >{product.description}</Text>
        </View>
    </View>
  )
}

export function AnimatedProductCard({ product, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 200,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <ProductCard product={product} />
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    productContainer: {
      margin: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 20,
    },
    productInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    productTitle: {
      color: '#fff',
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 18,
    },
    productPrice: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 22,
    },
    productDescription: {
      color: '#fff',
      textAlign: 'left',
    },
  });

export default ProductCard