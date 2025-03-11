import {Text, View, StyleSheet} from 'react-native';

interface IProps {
  msg: {
    txt: string;
    type: string;
    time: string;
  }
}

const SentMessage = ({msg}: IProps) => {
  return (
    <>
      <View style={styles.messageItem}>
        <Text style={styles.textContent}>{msg.txt}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{msg.time}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  messageItem: {
    width: '60%',
    flex: 1,
    backgroundColor: 'green',
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

export default SentMessage;
