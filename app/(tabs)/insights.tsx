import { Text, View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View>
        <Text className="text-xl font-bold text-primary">Insights</Text>
      </View>
    </SafeAreaView>
  );
};

export default Insights;
