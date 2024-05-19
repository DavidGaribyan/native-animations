import { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

export default function SecondAnimation() {
  const animationRed = useRef(new Animated.Value(0)).current;
  const animationBlue = useRef(new Animated.Value(0)).current;
  const animationGreen = useRef(new Animated.Value(0)).current;
  const animationCyan = useRef(new Animated.Value(0)).current;
  const animationYellow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = (animation: Animated.Value) =>
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 400,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 300,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 360,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 320,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 380,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 350,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 390,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 380,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 400,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]);

    const animations = [
      animate(animationRed),
      animate(animationBlue),
      animate(animationGreen),
      animate(animationCyan),
      animate(animationYellow),
    ];

    Animated.stagger(200, animations).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: animationRed }] }}>
        <View style={styles.roundRed}></View>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: animationBlue }] }}>
        <View style={styles.roundBlue}></View>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: animationGreen }] }}>
        <View style={styles.roundGreen}></View>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: animationCyan }] }}>
        <View style={styles.roundCyan}></View>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: animationYellow }] }}>
        <View style={styles.roundYellow}></View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    transform: [{ translateY: -100 }],
    gap: 20,
  },
  roundRed: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
  },
  roundBlue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "blue",
  },
  roundGreen: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "green",
  },
  roundCyan: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "cyan",
  },
  roundYellow: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "yellow",
  },
});
