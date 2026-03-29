import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-primary">Sign In</Text>
      <Link href="/" className="mt-4">
        <Text>Go to Home</Text>
      </Link>
    </View>
  );
};

export default SignIn;
