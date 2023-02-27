import React, {useEffect, useState} from "react";

import {View, 
        Text,
        StyleSheet, 
        TextInput, 
        FlatList
      } from  'react-native';

import { Button } from "../conponents/Button";
import { SkillCard } from "../conponents/SkillCard";

interface SkillData {
   id   : string;
   name : string;
}

export default function Home (){
//const[estado inicial, função que atualiza o estado]
   const [newSkill, SetNewSkill] = useState('');
   const [mySkills, setMyskiils] = useState<SkillData[]>([]);
   const [greeting,setGreeting ] = useState('');

   function handleAddNewSkill(){
      //os trez pontos {...} pegam oque ja foi adicionado ao array e adiciona junto ao novo item (spred operaor)
      const data ={
         id : String(new Date().getTime()),
         name : newSkill
      } 
      setMyskiils(oldState => [...oldState, data]);
   }

   function handleRemoveSkill(id : string){
      setMyskiils(oldState => oldState.filter( 
         skill => skill.id !== id 
      ));
   }

   useEffect(()=>{
       const currentHour = new Date().getHours();

       if (currentHour < 12){
          setGreeting('Good Morning');
       }
       else if (currentHour >= 12 && currentHour < 18){
         setGreeting('Good afternoon');
       }
       else{
         setGreeting('Good nigth');
       }
   },[])

   return(
     <View  style={styles.container}> 

        <Text style={styles.title}>
          welcome, Jonatan
        </Text>

        <Text style={styles.greetings}>
           {greeting}
        </Text>  

        <TextInput
              style={styles.input}
              placeholder = "New skill"
              placeholderTextColor= '#555'
              onChangeText={SetNewSkill}
        />

        <Button 
          onPress={handleAddNewSkill}
          title="Add"
        />
        
       <Text style={[styles.title,  {marginVertical : 50}]}>
          My Skills 
       </Text>
      
       <FlatList
         data={mySkills}
         keyExtractor={item => item.id} 
         renderItem={({item})=>(
            <SkillCard  skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
            />
         )}
      />

     </View>
   )
}

const styles = StyleSheet.create({
   container :{
      flex:1,
      backgroundColor: '#121015',
      paddingVertical : 70,
      paddingHorizontal:30,
   },
   title : {
     color : '#fff',
     fontSize : 24,
     fontWeight : 'bold',

   },
   input :{
      backgroundColor : '#1f1e25',
      color :'#fff',
      fontSize :18,
      padding : 15,
      marginTop : 30,
      borderRadius : 7,
   },
   greetings :{
      color : '#FFF'
   },
})
