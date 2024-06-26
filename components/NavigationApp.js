import { FontAwesome6 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExcercisesScreen from "../screens/ExcercisesScreen";
import ProgressScreen from "../screens/ProgressScreen";
import StartScreen from "../screens/StartScreen";

const Tab = createBottomTabNavigator();

const NavigationApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Start"
      screenOptions={() => ({
        headerTintColor: "#daff6a",
        headerStyle: { backgroundColor: "#000000", height: 160 },
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "bold",
        },
        headerTitleAlign: "left",
        flex: 1,
        tabBarStyle: { backgroundColor: "#000000", height: 90 },
      })}
    >
      <Tab.Screen
        name="Exercises"
        component={ExcercisesScreen}
        options={{
          title: "Exercise Library",
          headerTitle: "EXERCISE LIBRARY",
          tabBarActiveTintColor: "#daff6a",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="book-open" color={color} size={size} />
          ),
          tabBarOnPress: ({ navigation }) => {
            // Reset the stack and navigate to ExercisesScreen
            navigation.navigate("Exercises", {
              screen: "ExcercisesScreen",
            });
          },
        }}
      />
      <Tab.Screen
        name="Start"
        component={StartScreen}
        options={{
          title: "Start Workout",
          headerTitle: "START WORKOUT",
          tabBarActiveTintColor: "#daff6a",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="dumbbell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          title: "Progress",
          headerTitle: "PROGRESS",
          tabBarActiveTintColor: "#daff6a",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="square-check" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationApp;
