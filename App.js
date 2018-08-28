import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store,';
import { Header } from './src/components/commons';
import LibraryList from './src/components/LibraryList';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1 }}>
          <Header headerText="Aleks Tech" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
