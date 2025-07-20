import { useState } from "react";
import { View, StyleSheet, Button, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { AppContext } from "../Components/TasksContext";
import TaskCreationForm from "../Components/TaskCreationForm";
import { Entypo} from "@expo/vector-icons";
export default function HomePage(){
    const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },

  tasksQuantities:{
  backgroundColor: 'rgba(213, 230, 233, 1)',
  padding: 20,
  borderBlockColor: 'rgb(125, 57, 23)',
  borderWidth: 2,
  borderRadius: 20
  },
  

})
const {visible, setVisible, tasks} = useContext(AppContext)
const allNumber = tasks.length
const toDoNumber = tasks.filter(task=>task.status == 'to do').length
const inProgressNumber = tasks.filter(task=>task.status == 'in progress').length
const doneNumber = tasks.filter(task=>task.status == 'done').length

    return  (
    <SafeAreaView style={[styles.container]}>
      <View style={ styles.tasksQuantities }>
        <View>
          <Text>ALL - {allNumber}</Text>
        </View>
        <View>
          <View><Text>TO DO - {toDoNumber}</Text></View>
          <View><Text>IN PROGRESS - {inProgressNumber}</Text></View>
          <View><Text>DONE - {doneNumber}</Text></View>
        </View>

      </View>

        <Entypo onPress={()=>{setVisible(true)}} size={28} name="add-to-list" color={'rgb(45, 34, 123)'} />
              
              { visible && <TaskCreationForm></TaskCreationForm>}
    
    
                
            
          </SafeAreaView> 
    )
}