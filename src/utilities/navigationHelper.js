import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(r) {
  _navigator = r;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function back() {
  _navigator.dispatch(NavigationActions.goBack());
}

export default {
  navigate,
  setTopLevelNavigator,
  back,
};
