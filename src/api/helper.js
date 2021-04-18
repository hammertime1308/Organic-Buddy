import { axios, Endpoints } from '../api';

export const login = (email, password) =>
  axios
    .post(Endpoints.LOGIN, { email: email, password: password })
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      return {
        status: error.response.status,
        data: error.response.data.Message,
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
        status: error.response.status,
        data: error.response.data.Message,
      };
    });
