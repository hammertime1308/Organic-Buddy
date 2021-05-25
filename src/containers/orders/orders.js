import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Moment from 'moment';

import { Header } from '../../components';

import { getOrders } from '../../api';
import Context from '../../context';
import { NavigationService } from '../../utilities';

import {
  OrderView,
  ScrollContainer,
  OrderCardContainer,
  HorizontalContainer,
  StatusText,
} from './styles';

const OrderCard = ({ transactionId, timestamp, amount, status, items }) => {
  return (
    <OrderCardContainer>
      <HorizontalContainer>
        <StatusText status={status}>{status.toUpperCase()}</StatusText>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'gray' }}>
          {timestamp}
        </Text>
      </HorizontalContainer>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        Rs. {amount}
      </Text>
      {items.map(item => (
        <HorizontalContainer>
          <Text>{item.name}</Text>
          <Text>
            Rs. {item.price} X {item.quantity}
          </Text>
        </HorizontalContainer>
      ))}
      <Text style={{ fontSize: 8, color: 'gray', paddingTop: 5 }}>
        ID: {transactionId}
      </Text>
    </OrderCardContainer>
  );
};

export const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [context, setContext] = useContext(Context);

  const getData = async () => {
    setLoading(true);
    let response = await getOrders(context.get('user').userId);
    if (response.status === 200) {
      setData(response.data);
    } else if (response.status === 404) {
      setData([]);
    } else {
      alert(response.data);
      NavigationService.back();
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <OrderView>
      <Header>ORDERS</Header>
      <Header />
      {loading ? (
        <ActivityIndicator
          style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
          size={50}
          color="green"
        />
      ) : (
        <View style={{ flex: 1 }}>
          {data.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                No orders found !
              </Text>
              <Text style={{ fontSize: 15, color: 'gray' }}>
                Go ahead and order stuff to see here.
              </Text>
            </View>
          ) : (
            <ScrollContainer>
              {data.map(item => (
                <OrderCard
                  transactionId={item.transactionId}
                  status={item.status}
                  timestamp={Moment.utc(item.timestamp)
                    .local()
                    .format('YYYY-MM-DD hh:mm:ss')}
                  amount={item.amount}
                  items={item.items}
                  key={item.transactionId}
                />
              ))}
            </ScrollContainer>
          )}
        </View>
      )}
    </OrderView>
  );
};
