import { get } from 'lodash';

import { axios, Endpoints } from '../api';

export const login = (email, password) =>
  axios
    .post(Endpoints.LOGIN, { email: email, password: password })
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      return {
        status: get(error, 'response.status', 'no status'),
        data: get(error, 'response.data.Message', error.message),
      };
    });

export const signUp = (firstName, lastName, email, contact, password) =>
  axios
    .post(Endpoints.SIGNUP, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      contact: contact,
    })
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      return {
        status: get(error, 'response.status', 'no status'),
        data: get(error, 'response.data.Message', error.message),
      };
    });

export const getDashboardData = userId =>
  axios
    .get(Endpoints.GET_DASHBOARD_DATA + `/${userId}`)
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      return {
        status: get(error, 'response.status', 'no status'),
        data: get(error, 'response.data.Message', error.message),
      };
    });

export const deleteEquipment = id =>
  axios
    .delete(Endpoints.DELETE_EQUIPMENT + `/${id}`)
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      return {
        status: get(error, 'response.status', 'no status'),
        data: get(error, 'response.data.Message', error.message),
      };
    });

export const addNewEquipment = ({
  equipmentName,
  equipmentDescription,
  equipmentPrice,
  equipmentImages,
  equipmentType,
  sellerId,
  sellerContact,
}) =>
  axios
    .post(Endpoints.CREATE_NEW_EQUIPMENT, {
      equipmentId: 0,
      equipmentName: equipmentName,
      equipmentDescription: equipmentDescription,
      equipmentPrice: equipmentPrice,
      equipmentImages: equipmentImages,
      equipmentType: equipmentType,
      sellerId: sellerId,
      sellerContact: sellerContact,
    })
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      return {
        status: get(error, 'response.status', 'no status'),
        data: get(error, 'response.data.Message', error.message),
      };
    });
