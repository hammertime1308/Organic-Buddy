import { StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(r) {
  _navigator = r;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

function replace(routeName, params) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}

function back() {
  _navigator.dispatch(StackActions.pop());
}

export default {
  navigate,
  replace,
  setTopLevelNavigator,
  back,
};
