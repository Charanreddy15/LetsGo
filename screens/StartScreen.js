import { ScrollView, View } from "react-native";
import TemplatesExercise from "../components/workouts/TemplatesExercise";

const StartScreen = () => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={{ flex: 1 }}>
        <TemplatesExercise />
      </View>
    </ScrollView>
  );
};

export default StartScreen;
