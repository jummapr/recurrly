import "@/global.css";
import { styled } from "nativewind";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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
    </SafeAreaView>
  );
}
