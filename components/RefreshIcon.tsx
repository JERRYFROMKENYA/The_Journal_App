import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';
import { Button } from 'react-native-paper';

export function RefreshIcon() {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
        <Button><ThemedText style={styles.text} onPress={()=>{console.log("refresh")}}>✨ Refresh</ThemedText></Button>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 32,
    marginBottom:10,
    
  },
});