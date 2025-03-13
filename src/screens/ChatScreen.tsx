import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert, StatusBar,
} from 'react-native';
import {useState, useEffect} from 'react';
// components
import SentMessage from '../components/SentMessage.tsx';
import ReceivedMessage from '../components/ReceivedMessage.tsx';
import openAi from "../utils/openAi.ts";

const ChatScreen = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [enteredText, setEnteredText] = useState<string>('');
  useEffect(() => {
    setMessages([
      {
        txt: 'Some message',
        type: 'sent',
        time: '22:00',
      },
      {
        txt: 'Some message',
        type: 'sent',
        time: '22:00',
      },
      {
        txt: 'Some message R',
        type: 'received',
        time: '22:00',
      },
      {
        txt: 'Some message',
        type: 'sent',
        time: '22:00',
      },
    ]);
  }, []);
  useEffect(() => {
    console.log(enteredText);
  }, [enteredText]);

  function handleSendMessage() {
    //TODO: Need delete
    // openAi().then(r => console.log(r));

    if (enteredText.length > 0) {
      const msg_obj = {
        txt: enteredText,
        type: 'sent',
        time: '21:00',
      };
      setMessages([...messages, msg_obj]);
      setEnteredText('');
    } else {
      Alert.alert('Попередження!', 'Введіть текст!');
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={"brown"} />
      <View style={styles.headerArea}>
        <Text style={styles.headerArea_text}>Chat AI</Text>
      </View>
      <ScrollView style={styles.messageArea}>
        {messages?.map((item, index) => {
          return (
            <View key={index}>
              {item.type === 'sent' ? (
                <SentMessage msg={item} />
              ) : (
                <ReceivedMessage msg={item} />
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputArea_enter}
          value={enteredText}
          onChangeText={setEnteredText}
        />
        <TouchableOpacity
          style={styles.inputArea_btn}
          onPress={handleSendMessage}>
          <Text style={styles.inputArea_btn_text}>-{'>'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    // borderWidth: 2,
    // borderColor: 'green',
    flexDirection: 'row',
  },
  messageArea: {
    // borderWidth: 2,
    // borderColor: 'red',
    paddingHorizontal: 16,
  },
  headerArea: {
    // borderWidth: 2,
    // borderColor: 'yellow',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'brown',
    marginBottom: 16,
  },
  headerArea_text: {
    color: 'white',
    fontSize: 18,
  },
  inputArea_enter: {
    backgroundColor: '#f3ecec',
    minWidth: '80%',
  },
  inputArea_btn: {
    backgroundColor: 'green',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea_btn_text: {
    color: 'white',
    fontSize: 28,
  },
});

export default ChatScreen;
