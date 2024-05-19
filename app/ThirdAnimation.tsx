import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export default function ThirdAnimation() {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const heartAnimation = Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.3,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0.7,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1.1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0.9,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]);
    Animated.loop(heartAnimation).start();
  }, [animation]);

  return (
    <Animated.View style={{ transform: [{ scale: animation }] }}>
      <Image
        source={{ uri: "https://www.svgrepo.com/show/513311/heart.svg" }}
        style={styles.image}
      />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
