import { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Animated, Pressable } from "react-native";

export default function FirstAnimation() {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0.7,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [animation]);

  return (
    <View>
      <View>
        <Animated.View
          style={{
            transform: [
              {
                scale: animation,
              },
            ],
          }}
        >
          <Text style={styles.text}>Bounce In</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    color: "blue",
  },
});
