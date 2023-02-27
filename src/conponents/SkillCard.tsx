import React from "react";

import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
   } from 'react-native';


interface SkillCardProps extends TouchableOpacityProps{
  skill : string;
}

export function SkillCard({skill, ...rest} : SkillCardProps){
    return(
      <TouchableOpacity  style={styles.ButtonSkill} {...rest}>
        <Text style={styles.textSkill}>
            {skill}
        </Text>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
      ButtonSkill :{
      backgroundColor: '#1f1025',
      padding : 15,
      borderRadius : 50,
      alignItems :"center",
      marginVertical : 10
    },
    textSkill:{
       color :'#fff',
       fontSize: 22,
       fontWeight: 'bold',
    },
 })
 