import * as React from 'react';
import { Avatar, Button, Card, Chip, Text } from 'react-native-paper';
import { ThemedView } from '../../ThemedView';
import { ThemedText } from '../../ThemedText';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { RefreshIcon } from '../../RefreshIcon';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
  } from 'react-native-reanimated';

const Suggestions = () => {
    const rotationAnimation = useSharedValue(0);

    rotationAnimation.value = withRepeat(
      withSequence(withTiming(10, { duration: 200 }), withTiming(-10, { duration: 200 }),withTiming(0, { duration: 200 })),
      1 // Run the animation 4 times
    );
  
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotationAnimation.value}deg` }],
    }));

    const colorScheme= useColorScheme()
    
    return(
    <View style={{marginBottom:20, marginLeft:10, marginRight:10,marginTop:13}}>
     
        {/* Card */}
        <Animated.View style={animatedStyle}>
        <Card style={{}} onPress={()=>{
            console.log("pressed")
        }}>
        <Card.Title title="Reflection" subtitle="How do you feel?" left={()=><Ionicons name="sparkles" size={24} color={colorScheme === 'dark' ? "white" : "black"} />} />
        <Card.Actions>
      <Text variant="bodySmall" style={{flex:50}}>Tap to journal...</Text>
        </Card.Actions>
        </Card>
        </Animated.View>

           {/* <Chip style={{width:100}} icon="music" onPress={() => console.log('Pressed')}>Music</Chip> */}
        <View style={{flexDirection:"row", flexWrap:"wrap",justifyContent:"center",marginTop:10}}>
        <Button icon="spotify" style={{width:100}}  onPress={() => console.log('Music')}>Music</Button>
        <Button icon="microphone" style={{width:140}}  onPress={() => console.log('Pressed')}>Voice Notes</Button>
        <Button icon="image" style={{width:100}}  onPress={() => console.log('Pressed')}>Image</Button>
        <Button icon="camera" style={{width:100}}  onPress={() => console.log('Pressed')}>Camera</Button>
        
        
        </View>


    </View>
  
)};

export default Suggestions;