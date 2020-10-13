import React from 'react'
import {Text,View,Button} from "react-native";
import { connect } from 'react-redux';


export class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { navigation:navigate } = this.props;
    setTimeout(function(){navigate.navigate("Home")}, 3000);
  }

  render(){
    const titleText = "Splash Screen";
    return (<View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text> {titleText} </Text>
               </View>)
  }
}


export default connect(null, null)(Splash);
