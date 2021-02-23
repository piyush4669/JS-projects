/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (Platform.OS === 'android') {
    if (typeof Symbol === 'undefined') {
      if (Array.prototype['@@iterator'] === undefined) {
        Array.prototype['@@iterator'] = function() {
          let i = 0;
          return {
            next: () => ({
              done: i >= this.length,
              value: this[i++]
            })
          };
        };
      }
    }
  }


AppRegistry.registerComponent(appName, () => App);
