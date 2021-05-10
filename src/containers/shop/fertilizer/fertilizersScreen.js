import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

import { Card } from '../../../components';

import { getFertilizers, generateUrl } from '../../../api';
import { NavigationService } from '../../../utilities';

export const FertilizersScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getData = async () => {
    setLoading(true);
    let response = await getFertilizers();
    if (response.status === 200) {
      // modify url of image in response
      response.data.map(item => {
        item.productImages = item.productImages.map(url => generateUrl(url));
      });
      setData(response.data);
    } else {
      alert(response.data);
      NavigationService.replace('Dashboard');
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0 }}
          size={50}
          color="green"
        />
      ) : (
        <ScrollView>
          {data.map(item => (
            <Card
              productId={item.productId}
              productName={item.productName}
              productDescription={item.productDescription}
              productPrice={item.productPrice}
              productImages={item.productImages}
            />
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      )}
    </View>
  );
};
