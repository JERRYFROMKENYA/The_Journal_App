import { Animated, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { ThemedText } from '../../ThemedText'
import { Avatar, Button, Icon } from 'react-native-paper'

interface HeaderProps {
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
}
const isIOS = Platform.OS === 'ios';
const Header: React.FC<HeaderProps> = ({ showSearch, setShowSearch }) => {
  
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: showSearch ? 1 : 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [showSearch]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.title, { opacity }]}>
        <ThemedText type='subtitle'>
          {showSearch ? "Search" : (
            <>
              <Icon source="book" size={20} />
              <ThemedText>Journal</ThemedText>
            </>
          )}
        </ThemedText>
      </Animated.View>
      <View style={styles.buttonContainer}>
        {!showSearch && (
          <Button
            icon="account"
            onPress={() => console.log("Profile")}
            style={styles.profileButton}
          >
            Frank Castle
          </Button>
        )}
        <Button
          icon={() => (
            <Icon source={showSearch ? "close" : "magnify"} size={15} />
          )}
          onPress={() => setShowSearch(!showSearch)}
          style={styles.searchButton}
          children={""}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: isIOS ? 5 : 40,
    backfaceVisibility: "hidden",
    flexWrap: "wrap",
  },
  title: {
    marginLeft: 20,
    flex: 50,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 0,
    flexGrow: 0,
  },
  profileButton: {
    marginRight: 0,
    marginTop: 0,
  },
  searchButton: {
    marginRight: 0,
  },
});

export default Header;