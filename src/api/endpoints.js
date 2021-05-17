import axios from 'axios';

export const Endpoints = {
  LOGIN: '/login',
  DELETE_USER: '/login/',
  SIGNUP: '/signup',
  CREATE_NEW_FERTILIZER: '/fertilizers',
  GET_FERTILIZER: '/fertilizers',
  DELETE_FERTILIZER: '/fertilizers/',
  CREATE_NEW_SEED: '/seeds',
  GET_SEEDS: '/seeds',
  DELETE_SEED: '/seeds/',
  CREATE_NEW_EQUIPMENT: '/equipments',
  GET_EQUIPMENT: '/equipments',
  DELETE_EQUIPMENT: '/equipments/',
  UPLOAD_DASHBOARD_DATA: '/dashboard',
  GET_DASHBOARD_DATA: '/dashboard/',
  CREATE_NEW_POST: '/forum',
  GET_ALL_POSTS: '/forum',
  DELETE_POST: '/forum/',
  ADD_COMMENT: '/forum/',
  CREATE_CROP_LEARN_SECTION: '/learn',
  GET_CROPS_LEARN_SECTION: '/learn',
  DELETE_CROP_LEARN_SECTION: '/learn/',
};

export default axios.create({
  baseURL: 'https://organic-buddy-api.herokuapp.com',
  responseType: 'json',
  headers: {
    'content-type': 'application/json',
  },
});
