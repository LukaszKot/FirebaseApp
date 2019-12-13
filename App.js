import { createStackNavigator, createAppContainer } from "react-navigation";
import Authenticate from "./components/Authenticate"
import ListScreen from "./components/ListScreen"
import Login from "./components/Login"
import Main from './components/Main'
import MapScreen from './components/MapScreen';
import Registration from "./components/Registration";

const Root = createStackNavigator({
  main: { screen: Main },
  authenticate: { screen: Authenticate },
  listScreen: { screen: ListScreen },
  login: { screen: Login },
  registration: { screen: Registration },
  mapScreen: { screen: MapScreen },
});

const App = createAppContainer(Root);

export default App;