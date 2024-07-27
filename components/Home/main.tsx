import React from 'react';
import {
  StyleProp,
  ViewStyle,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
  I18nManager,
  View,
} from 'react-native';
import { AnimatedFAB, Avatar, Button, Icon, MD3Colors } from 'react-native-paper';
import JournalEntry from './components/journal-entry';
import { EntryExitTransition } from 'react-native-reanimated';
import  SearchBar  from './components/search-bar';
import { ThemedText } from '../ThemedText';
import Suggestions from './components/suggestions-widget';
import SegmentedButtonView from './components/segmenter';
import Header from './components/header';
import { StatusBar } from 'expo-status-bar';
import NewEntry from '../NewEntry/NewEntry';

const Main = ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
}: any) => {
  const [isExtended, setIsExtended] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showAddEntryModal, setShowAddEntryModal] = React.useState(false);

  const isIOS = Platform.OS === 'ios';

  const onScroll = ({ nativeEvent }: any) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const fabStyle = { [animateFrom]: 16 };

  const onAddEntry = () => {
    setShowAddEntryModal(true);
  };

  const onModalClose = () => {
    setShowAddEntryModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <Header showSearch={showSearch} setShowSearch={setShowSearch}/>
      </View>
      {showSearch && <SearchBar focus />}
      <StatusBar style="auto" />
      
      <ScrollView onScroll={onScroll}>

        {[...new Array(10).keys()].map((_, i) => (
          <JournalEntry key={i} style={styles.entry} />
        ))}

      <NewEntry  isVisible={showAddEntryModal} onClose={onModalClose} >
    
      </NewEntry>
        <View style={{height:30, marginBottom:50}}>
          <Text style={
            {
              textAlign:'center'
            }
          }>
            Designed in Nairobi
          </Text>

        </View>
      </ScrollView>
      
      <AnimatedFAB
        icon={'plus'}
        label={'Add Journal Entry'}
        extended={isExtended}
        onPress={() => onAddEntry()}
        visible={visible}
        animateFrom={'right'}
        iconMode={'dynamic'}
        style={[styles.fabStyle, style, fabStyle]}
      />
    </SafeAreaView>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 8,
    columnGap: 8,
    marginBottom: 45,
  },
  fabStyle: {
    position: 'absolute',
    bottom: 50, // Adjust this value as needed to position above the nav bar
    right: 15,
  },
  entry: {
    marginBottom: 30,
  },
});
