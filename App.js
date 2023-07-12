import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';



export default function App() {
  const [enteredGoalText, setenteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(enteredText) {
    setenteredGoalText(enteredText)
  };


  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,
    { text: enteredGoalText, key: Math.random().toString() },
    ])
  };



  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goals' onChangeText={goalInputHandler} />
        <Button title='    Add    ' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>;
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '86%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 6,
  }
});
