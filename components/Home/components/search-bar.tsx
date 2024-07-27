import * as React from 'react';
import { Searchbar,Avatar, Button } from 'react-native-paper';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSharedValue, withRepeat, withSequence, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';


const SearchBar = (props:{
  focus:boolean
}) => {

  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));



  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 62.5,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const animatedStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0], // Adjust the values as needed
        }),
      },
    ],
  };
  const [searchQuery, setSearchQuery] = React.useState('');
  const[filteredData, setFilteredData] = React.useState([]);
  const[isLoading, setIsLoading] = React.useState(false);
  const[isError, setIsError] = React.useState(false);

  const onChangeSearch = (query: string) => {


    setIsLoading(!isLoading)
    setSearchQuery(query);
  }

  return (
      <View style={[styles.container,{marginTop:5, marginLeft:10, marginRight:10, position:"static", marginBottom:0,top:1}]}>
     <Animated.View style={ animatedStyle}>
    <Searchbar
    style={{marginLeft: 10, marginRight:10, marginBottom:0}}
      loading={isLoading}
      placeholder="Tap ✨ to  get inspiration... "
      onChangeText={setSearchQuery}
      value={searchQuery}
      onChange={(e)=>onChangeSearch(e.nativeEvent.text)}
      onIconPress={() => console.log('onIconPress')}
      autoFocus={props.focus}
      blurOnSubmit={true}
      icon={() => (
        <Animated.View style={animatedStyle}>
      <ThemedText style={styles.text}>✨</ThemedText>
    </Animated.View>
      )}
    />

      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius:12.5,
    marginTop:25// Adjust the height as needed
  },
  overlay: {
    position: 'static',
   
    flexDirection: 'row',
    justifyContent: 'space-between',borderRadius:25,
    backgroundColor: 'rgba(0, 0, 0, 0.125)',
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -0,
  },
});


export default SearchBar;
