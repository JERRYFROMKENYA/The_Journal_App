import { Modal, View, Pressable, StyleSheet, Platform, ScrollView, SafeAreaView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { Icon, Surface,Text } from 'react-native-paper';



export default function NewSingleEntry(props:{ isVisible:any,  onClose:any })
{


    const [isExtended, setIsExtended] = useState(true);
    const [title, setTitle] = useState("New Entry");
    const [subTitle, setSubTitle] = useState("");
    const [content, setContent] = useState("");
    const [music, setMusic] = useState([]);
    const [images, setImages] = useState([]);
    const [voice, setVoice] = useState([]);
    const [tags, setTags] = useState([]);
    const [mood, setMood] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [videos, setVideos] = useState([]);
    const [isPrivate, setIsPrivate] = useState(false);
    const [isDraft, setIsDraft] = useState(false);









    const onScroll = ({ nativeEvent }: any) => {
        const currentScrollPosition =
          Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
    
        setIsExtended(currentScrollPosition <= 0);
      };

    const Content=(props:any)=>{
        return(
            <View>
             <SafeAreaView style={styles.container}>

             
            <ScrollView onScroll={onScroll}>

            

            </ScrollView>
           
            </SafeAreaView>
            </View>
            
     
        )
    }

    const IOSWrapper = (content:any) => {

        return (
            <Modal presentationStyle={"pageSheet"} animationType="slide" transparent={false} visible={props.isVisible}>
              <Surface style={styles.surface} elevation={4}>
            <View style={styles.titleContainer}>
            <Text style={{fontWeight:900}} variant="headlineLarge">{title? title:"New Entry"}</Text>
            <Pressable onPress={props.onClose}>
                <Icon source="close"  size={22} />
            </Pressable>
            </View>
                <View style={styles.modalContent}>
           
                {/* <Text>
                    iOS debug
                </Text> */}
            {content}
            </View>
            </Surface>
            </Modal>
        );
      }
      const AndroidWrapper = (content:any) => {

        return (
            <Modal onDismiss={props.onClose} animationType="slide" transparent={true} visible={props.isVisible}>
             <Surface style={styles.surface} elevation={4}>
            <View style={styles.modalContentInner}>
            <View style={styles.titleContainer}>
            <Text style={{fontWeight:900}} variant="headlineLarge">{title? title:"New Entry"}</Text>
            <Pressable onPress={props.onClose}>
                <Icon source="close"  size={22} />
            </Pressable>
            </View>
            {content}
            </View>
            </Surface>
            </Modal>
        );
      }
    



const isIOS = Platform.OS === 'ios';
  return (
    <View>
    {isIOS ? (<IOSWrapper> <Content></Content> </IOSWrapper>) 
    :
     AndroidWrapper(<Content></Content>)}
    </View>
    

  );
}


const styles = StyleSheet.create({
    modalContent: {
      height: '100%',
      width: '100%',
    //   backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    }, modalContentAndroid: {
        height: '100%',
        width: '100%',
        // backgroundColor: '#FFFFFF11',
        position: 'absolute',
        top: 0,
      }, modalContentInner: {
        height: '98.%',
        width: '100%',
        // backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
      },
    titleContainer: {
      height: '10%',
    //   backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    }, container: {
        flexGrow: 1,
        gap: 8,
        columnGap: 8,
        marginBottom: 45,
      },
      surface: {
        padding: 0,
        height: "95%",
        width: "100%",
        borderTopRightRadius: 36,
        borderTopLeftRadius: 36,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      },
  });