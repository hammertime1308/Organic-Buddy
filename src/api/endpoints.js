const BASE_URL = 'https://organic-buddy-api.herokuapp.com';

export default {
  LOGIN: BASE_URL + '/login',
  DELETE_USER: BASE_URL + '/login/',
  SIGNUP: BASE_URL + '/signup',
  CREATE_NEW_FERTILIZER: BASE_URL + '/fertilizers',
  GET_FERTILIZER: BASE_URL + '/fertilizers',
  DELETE_FERTILIZER: BASE_URL + '/fertilizers/',
  CREATE_NEW_SEED: BASE_URL + '/seeds',
  GET_SEEDS: BASE_URL + '/seeds',
  DELETE_SEED: BASE_URL + '/seeds/',
  CREATE_NEW_EQUIPMENT: BASE_URL + '/equipments',
  GET_EQUIPMENT: BASE_URL + '/equipments',
  DELETE_EQUIPMENT: BASE_URL + '/equipments/',
  UPLOAD_DASHBOARD_DATA: BASE_URL + '/dashboard',
  GET_DASHBOARD_DATA: BASE_URL + '/dashboard/',
  CREATE_NEW_POST: BASE_URL + '/forum',
  GET_ALL_POSTS: BASE_URL + '/forum',
  DELETE_POST: BASE_URL + '/forum/',
  CREATE_CROP_LEARN_SECTION: BASE_URL + '/learn',
  GET_CROPS_LEARN_SECTION: BASE_URL + '/learn',
  DELETE_CROP_LEARN_SECTION: BASE_URL + '/learn/',
};
