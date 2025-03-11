import {StyleSheet, Text, View} from 'react-native';

interface IProps {
  msg: {
    txt: string;
    type: string;
    time: string;
  }
}

const ReceivedMessage = ({msg}: IProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.messageItem}>
          <Text style={styles.textContent}>{msg.txt}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{msg.time}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
  messageItem: {
    maxWidth: '60%',
    minWidth: '40%',
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 10,
  },
  textContent: {
    fontSize: 14,
    color: 'white',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  timeText: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});

export default ReceivedMessage;
