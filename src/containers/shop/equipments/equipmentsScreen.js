import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

import { EquipmentCard } from '../../../components';

import { getEquipments, generateUrl } from '../../../api';
import { NavigationService } from '../../../utilities';

export const EquipmentScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const [count, setCount] = useState(0);

  const getData = async () => {
    setLoading(true);
    let response = await getEquipments();
    if (response.status === 200) {
      // modify url of image in response
      response.data.map(item => {
        if ('equipmentImages' in item) {
          item.equipmentImages = item.equipmentImages.map(url =>
            generateUrl(url),
          );
        } else {
          item.equipmentImages = [];
        }
      });
      setData(response.data);
      setLoading(false);
    } else {
      alert(response.data);
      NavigationService.replace('Dashboard');
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

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
            <EquipmentCard
              id={item.equipmentId}
              equipmentName={item.equipmentName}
              equipmentDescription={item.equipmentDescription}
              equipmentPrice={item.equipmentPrice}
              equipmentImages={item.equipmentImages}
              equipmentType={item.equipmentType}
              sellerId={item.sellerId}
              sellerContact={item.sellerContact}
              key={item.id}
              setCount={setCount}
            />
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      )}
    </View>
  );
};
