import { Modal, View, Pressable, StyleSheet, Platform, ScrollView, SafeAreaView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { Icon, Surface,Text } from 'react-native-paper';
import Suggestions from '../Home/components/suggestions-widget';



export default function NewEntry(props:{ isVisible:any, onClose:any })
{
    const [isExtended, setIsExtended] = useState(true);
    const onScroll = ({ nativeEvent }: any) => {
        const currentScrollPosition =
          Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
    
        setIsExtended(currentScrollPosition <= 0);
      };

   
            const Content = (props: any) => {
                return (
                    <View>
                        <SafeAreaView style={styles.container}>
                            <ScrollView onScroll={onScroll}>
                                <Suggestions />
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                );
            };
            
     
 

    const IOSWrapper = (content:any) => {

        return (
            <Modal presentationStyle={"pageSheet"} animationType="slide" transparent={false} visible={props.isVisible}>
              <Surface style={styles.surfaceios} elevation={4}>
            <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
            <Text style={{fontWeight:900}} variant="headlineLarge">Suggestions</Text>
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
      const AndroidWrapper = (content:any) => {

        return (
            <Modal onDismiss={props.onClose} animationType="slide" transparent={true} visible={props.isVisible}>
             <Surface style={styles.surface} elevation={4}>
            <View style={styles.modalContentInner}>
            <View style={styles.titleContainer}>
            <Text style={{fontWeight:900}} variant="headlineLarge">Suggestions</Text>
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
    {isIOS ? (IOSWrapper(<Content></Content>)) 
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
        backgroundColor: '#FFFFFF77',
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
      },surfaceios: {
        padding: 0,
        height: "100%",
        width: "100%",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      }
  });


  