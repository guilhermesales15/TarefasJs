import {View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, } from 'react-native';
import React, {useState} from 'react';
import {FontAwesome} from '@expo/vector-icons'
import Tarefa from './src/Tarefas';
import DateTimePickerModal from "react-native-modal-datetime-picker"

export default function App(){
  const [ tarefa, setTarefa]= useState('')
  const [ lista, setLista] = useState([])

  function handleAdd (){
    if(tarefa===''){
      return;
    }

    const dados={
      key: Date.now(),
      item: tarefa
    }

    setLista(oldArray =>[dados, ...oldArray]);
    setTarefa('');
  }

  function handleDelete(item){
    let filtroItem = lista.filter((tarefa)=>{
      return (tarefa.item !==item)
    })

    setLista(filtroItem)
  }

 

  return(
    <View style={style.container}>
      <Text style={style.title}>TarefasJs</Text>
      <View style={style.inputContainer}>
        <TextInput
         style={style.input}
         placeholder='Digite uma tarefa'
         value={tarefa}
         onChangeText={(text)=> (setTarefa(text))}
          />
        <TouchableOpacity style={style.buttonAdd} onPress={handleAdd}>
          <FontAwesome name='plus' size={20} color='#FFF'/>
        </TouchableOpacity>
      </View>

      <FlatList
      data={lista}
      keyExtractor={(item)=>item.key}
      renderItem={({item})=><Tarefa data={item} deleteItem={()=>handleDelete(item.item)}/>}
      style = {style.list}
      />
   
        
    </View>
  )


}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#22272e' ,
  },
  title:{
    padding: 28,
    fontWeight: 'bold',
    color:'#FFFFFF',
    fontSize: 24,
    marginTop: '6%',
    paddingStart:'5%',
    marginBottom: 5,
  },
  inputContainer:{
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 22,
  },
  
  input:{
    width:'75%',
    height:44,
    backgroundColor:'#fff',
    borderRadius: 6,
    paddingHorizontal:8,
  },
  buttonAdd:{
    width: '15%',
    height:44,
    backgroundColor: '#73f7ff',
    marginLeft: 6,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:6
  },
  list:{
   flex: 1,
   backgroundColor:'#fff',
   paddingStart:'4%',
   paddingEnd:'4%',
   
  }


})