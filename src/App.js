import 'react-native-gesture-handler';
import React from 'react';

import Navigator from './navigation';
import { NavigationService } from './utilities';

const App = () => {
  // show landing screen
  // check if logged in
  // if logged in -> go to dashboard
  // else show info screens
  return (
    // <View>
    //   <Post
    //     image={[
    //       'https://upload.wikimedia.org/wikipedia/commons/5/59/Collmer_leaf_speck3.jpg',
    //     ]}
    //     title="Sample title"
    //     description="sample desc"
    //     timestamp="2021-04-04 13:01:47.167209"
    //   />
    //   <Post
    //     title="Sample title"
    //     description="sample desc"
    //     timestamp="2021-04-04 13:01:47.167209"
    //   />
    // </View>
    <Navigator
      ref={r => {
        NavigationService.setTopLevelNavigator(r);
      }}
    />
  );
};

export default App;
