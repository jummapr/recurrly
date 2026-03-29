import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className=" bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href={"/onboarding"}
        className="mt-4 p-4 rounded-full text-white bg-primary"
      >
        Start Onboarding
      </Link>
      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 p-4 rounded-full text-white bg-primary"
      >
        Sign In
      </Link>
      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 p-4 rounded-full text-white bg-primary"
      >
        Sign Up
      </Link>
    </View>
  );
}
