import * as React from 'react';
import { Searchbar,Avatar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{marginTop:5, marginLeft:10, marginRight:10}}>
    <Searchbar
    
    style={{marginLeft: 10, marginRight:10,}}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
     icon={() => <Avatar.Icon size={24} icon={()=><FontAwesome name="circle-o-notch" size={15} color="white" />} />}
     onChange={() => console.log('onChange')}
      onIconPress={() => console.log('onIconPress')}
    />
    {/* data filter */}

</View>
  );
};

export default SearchBar;
