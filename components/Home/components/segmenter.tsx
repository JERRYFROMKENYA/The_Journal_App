import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const SegmentedButtonView = () => {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'entries',
            label: 'My Entries',
            icon: 'book'
          },
          {
            value: 'suggestions',
            label: 'Suggestions',
            icon: 'lightbulb'
          },
          { value: 'bookmarks', 
          label: 'Bookmarks',
          icon: 'bookmark'},
        ]}
      />
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    margin:10,
    marginBottom:2
  },
});

export default SegmentedButtonView;