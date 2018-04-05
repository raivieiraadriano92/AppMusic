import { StackNavigator } from 'react-navigation';

import Album from 'pages/album';
import Main from 'pages/main';
import Search from 'pages/search';

const Routes = StackNavigator({
  Album: { screen: Album },
  Main: { screen: Main },
  Search: { screen: Search },
});

export default Routes;
