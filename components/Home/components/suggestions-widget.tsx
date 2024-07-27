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
import NewSingleEntry from '@/components/NewEntry/NewSingleEntry';

const Suggestions = () => {

  const [showAddEntryModal, setShowAddEntryModal] = React.useState(false);
  
  const onAddEntry = () => {
    setShowAddEntryModal(true);
  };

  const onModalClose = () => {
    setShowAddEntryModal(false);
  };



  const Suggestions=[
    "reflection",
    "state-of-mind"
    ,"image"
    ,"take-a-pic"
    ,"voice"
    ,"music"
  ]



    const[suggestionType, setSuggestionType] = React.useState(Suggestions[0])
    const rotationAnimation = useSharedValue(0);
    rotationAnimation.value = withRepeat(
      withSequence(withTiming(5, { duration: 200 }), withTiming(-5, { duration: 200 }),withTiming(0, { duration: 200 })),
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
        {/* <Card style={{height:100,width:"85%"}} onPress={()=>{
            console.log("pressed")
        }}>
        <Card.Title title="New Entry" subtitle="" left={()=><Ionicons name="add" size={25} color={colorScheme === 'dark' ? "white" : "black"} />} />
        <Card.Actions>
      <Text variant="bodySmall" style={{flex:50}}>Tap to write something</Text>
        </Card.Actions>
        </Card> */}
        <Button icon="plus" mode="contained" onPress={() => onAddEntry()}>
            New Entry
        </Button>
        </Animated.View>
        <View style={{flexDirection:"row", flexWrap:"wrap",justifyContent:"center",marginTop:10, overflow:"scroll", width:"100%"}}>
        <Button icon="music" style={{width:100}}  onPress={() => console.log('Music')}>Music</Button>
        <Button icon="microphone" style={{width:140}}  onPress={() => console.log('Pressed')}>Voice Notes</Button>
        <Button icon="image" style={{width:100}}  onPress={() => console.log('Pressed')}>Image</Button>
        <Button icon="camera" style={{width:100}}  onPress={() => console.log('Pressed')}>Camera</Button>
        <Button icon="thought-bubble" onPress={() => console.log('Pressed')}>Reflection</Button>
        <Button icon="emoticon-neutral" onPress={() => console.log('Pressed')}>State of Mind</Button>
        </View>
        <View style={{flexDirection:"column",padding:2, flexWrap:"wrap",justifyContent:"center",marginTop:10, overflow:"scroll", width:"100%"}}>
       
        </View>

        <NewSingleEntry  isVisible={showAddEntryModal} onClose={onModalClose}/>
      
    </View>
  
)};

export default Suggestions;