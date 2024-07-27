import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';



const LeftContent = (props:any) => <Avatar.Icon {...props} icon="book" />

const JournalEntry = (props:any) => (
  <Card style={props.style}   >
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Title title="Title" subtitle="Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="bodyMedium">Type Shit</Text>
    </Card.Content>
    <Card.Actions>
      <Button>View</Button>
      <Button>More</Button>
    </Card.Actions>
  </Card>
);




export default JournalEntry;