
import React from 'react'
import { View,Text} from "react-native";

export default class CounterValueDisplay extends React.Component {

  render(){
    const titleText = "Counter State value : " + this.props.countValue;
    console.log("Pressed") 
    return (<View>
              <Text> {titleText} </Text>
           </View>)
  }

}


