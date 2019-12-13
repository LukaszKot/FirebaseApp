import { createStackNavigator, createAppContainer } from "react-navigation";
import Authenticate from "./components/Authenticate"
import ListScreen from "./components/ListScreen"
import LoginRegister from "./components/LoginRegister"
import Main from './components/Main'
import MapScreen from './components/MapScreen';

const Root = createStackNavigator({
  main: { screen: Main },
  authenticate: { screen: Authenticate },
  listScreen: { screen: ListScreen },
  loginRegister: { screen: LoginRegister },
  mapScreen: { screen: MapScreen },
});

const App = createAppContainer(Root);

export default App;