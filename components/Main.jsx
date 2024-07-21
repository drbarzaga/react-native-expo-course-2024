import { StyleSheet, Text, View, Image, Button, TouchableHighlight, ScrollView, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';

import { useEffect, useState } from 'react';
import { getProducts } from '../lib/products';
import { formatCurrency } from '../lib/utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProductCard, { AnimatedProductCard } from './ProductCard';

export function Main() {
  // States
  const [products, setProducts] = useState([])

  // Custom hooks
  const inset = useSafeAreaInsets();

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products)
    }).catch(error => {
      console.error(error)
    }).finally(() => {
      console.log('Done')
    });
  }, [])

  return (
    <View style={{ paddingTop: inset.top, paddingBottom: inset.bottom, paddingLeft: inset.left, paddingRight: inset.right, backgroundColor: '#000', flex: 1 }}>
        {products.length > 0 ? (
         <FlatList 
            data={products}
            ketExtractor={item => item.id}
            renderItem={({ item, index }) => <AnimatedProductCard product={item} index={index} />}
        />
        ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={{ color: '#fff' }}>Loading products...</Text>
            </View>
        )}
    </View>
  );
}
