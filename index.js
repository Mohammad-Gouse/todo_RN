/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
// import AppPro from './AppPro';
import AppMain from './AppMain';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppMain);
