import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import { fetchCropsLearn } from '../../api';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { NavigationService } from '../../utilities';

export const Learn = () => {
  const [allData, setAllData] = useState();
  const [selectedData, setSelectedData] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    let response = await fetchCropsLearn();
    if (response.status === 200) {
      setAllData(response.data);
      setSelectedData(response.data[0]);
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
    <View style={{ flex: 1, height: '100%' }}>
      <View style={{ flex: 1 }}>
        <Header> LEARN </Header>
        <Header />
        {loading ? (
          <ActivityIndicator
            color="green"
            size={50}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <ModalDropdown
              style={{
                height: 50,
                width: '100%',
                backgroundColor: 'rgba(76, 154, 42, 1)',
              }}
              textStyle={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                justifyContent: 'center',
                alignSelf: 'center',
                padding: 10,
                paddingLeft: 20,
              }}
              dropdownTextStyle={{ fontSize: 18, width: 1000, paddingLeft: 20 }}
              dropdownStyle={{
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
              }}
              defaultIndex={0}
              defaultValue={selectedData.cropName}
              iSFullWidth={true}
              dropdownTextHighlightStyle={{ color: 'red' }}
              onSelect={(index, value) => setSelectedData(allData[index])}
              options={allData.map(item => item.cropName)}
            />

            <ScrollView style={{ margin: 20 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                Name of the crop
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 30,
                }}>
                {selectedData.cropName}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                Temperature
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 30,
                }}>
                {selectedData.temperature}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                Soil Moisture
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 30,
                }}>
                {selectedData.soil_moisture}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                Plantation Period
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 30,
                }}>
                {selectedData.plantation_period}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                Diseases
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 30,
                }}>
                {selectedData.diseases.map(item => item.name).join(' , ')}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                Region Grown
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 30,
                }}>
                {selectedData.regions_grown.join(', ')}
              </Text>
            </ScrollView>
          </View>
        )}
      </View>
      <Footer selected="learn" />
    </View>
  );
};
