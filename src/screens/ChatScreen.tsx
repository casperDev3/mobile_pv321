import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
// components
import SentMessage from '../components/SentMessage.tsx';
import ReceivedMessage from '../components/ReceivedMessage.tsx';

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
      <View style={styles.headerArea}>
        <Text>Chat AI</Text>
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
        <TextInput value={enteredText} onChangeText={setEnteredText} />
        <TouchableOpacity onPress={handleSendMessage}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    borderWidth: 2,
    borderColor: 'green',
  },
  messageArea: {
    borderWidth: 2,
    borderColor: 'red',
  },
  headerArea: {
    borderWidth: 2,
    borderColor: 'yellow',
  },
});

export default ChatScreen;
