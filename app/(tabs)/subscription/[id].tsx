import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-primary">
        Subscription Detail: {id}
      </Text>
      <Link
        href={"/(tabs)/subscription/[id]"}
        className="mt-4 p-4 text-white bg-primary "
      >
        Back to subscriptions
      </Link>
    </View>
  );
};

export default SubscriptionDetail;
