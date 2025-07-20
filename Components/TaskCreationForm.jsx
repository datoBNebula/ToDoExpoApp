import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Select } from "react-native";
import DatePicker from "react-native-date-picker";
import { useContext } from "react";
import { AppContext } from "./TasksContext";
import DropDownPicker from "react-native-dropdown-picker";

export default function TaskCreationForm() {
  const {visible, setVisible, tasks, setTasks} = useContext(AppContext)
const [open, setOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("Easy");
  const [options, setOptions] = useState([
    { label: 'Easy', value: 'easy' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Hard', value: 'Hard' },
    { label: 'Very Hard', value: 'Very Hard' },
  ]);

  const [newTask, setNewTask] = useState({
    name: null,
    id: null,
    description: null,
    difficulty: null,
    status: "to do"
  })

  const {taskId, setTaskId} = useContext(AppContext)

    const addItem = ()=>{
    const task = {
        name: newTask.name,
        id: taskId,
        description: newTask.description,
        difficulty: newTask.difficulty,
        status: newTask.status
    }
    setTasks(prev=>[...prev, task])
  }

  const addHandler = ()=>{
    addItem()
    setTaskId(prev=>prev+1)
    setVisible(false)
  }



  if (!visible) return null
  return (
    <View  style={styles.mainContainer}>
      <View style={styles.inputs}>
        <TextInput onChangeText={(e)=>setNewTask(prev=>({...prev, 'name': e}))} style={ styles.input} placeholderTextColor={'rgba(240, 230, 223, 1)'} placeholder="name" />
        <TextInput onChangeText={(e)=>setNewTask(prev=>({...prev, 'description': e}))} style={ styles.input} placeholderTextColor={'rgba(240, 230, 223, 1)'} placeholder="description" multiline numberOfLines={3} />
      </View>

      <View>
        <DropDownPicker 
        open={open}
        value={optionValue}
        items={options}
        setOpen={setOpen}
        setValue={setOptionValue}
        setItems={setOptions}
        placeholder="Select Level"
        listMode="SCROLLVIEW"
        onChangeValue={()=>setNewTask(prev=>({...prev, 'difficulty': optionValue}))}
        />
      </View>

  <View style={styles.buttonsView}>
      <Button title="Save" onPress={()=>addHandler()} />
      <Button title="Close" onPress={()=>setVisible(false)} />
  </View>

    </View>
  );
}


const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "gold",
      width: 300,
      height: 300,
      padding: 10,
      display: "flex",
      justifyContent: 'space-between',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform:[
        {translateX: -150},
        {translateY: -150}
      ],
    },

    inputs:{
      display: 'flex',
      gap: 10,
    },
    input:{
      borderBlockColor: 'rgba(196, 86, 2, 1)',
      // borderColor: 'rgba(46, 43, 40, 1)',
      borderWidth: 2,
      backgroundColor: 'rgba(196, 86, 2, 1)',
      borderRadius: 15,
      borderBottomColor: 'rgba(215, 122, 51, 1)',
      fontWeight: 500,
      color: 'rgb(57, 31, 10)',
    },
    buttonsView: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'flex-end',
      gap: 10
    } 
  });