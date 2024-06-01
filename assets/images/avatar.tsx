import {Avatar} from 'react-native-paper';
const avatarImage=require('./avatar.webp');


const AvatarComponent = (props:{image?:string}) => {
  return (
    <Avatar.Image size={24} source={props.image||avatarImage} />
  );
};

export default AvatarComponent;