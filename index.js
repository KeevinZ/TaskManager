import { registerRootComponent } from 'expo';

import App from './src/screens/TaskList';
import TaskList from './src/screens/TaskList';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(TaskList);
