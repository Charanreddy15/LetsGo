import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import NavigationApp from "./components/NavigationApp";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <NavigationApp />
    </NavigationContainer>
  );
};

export default App;
