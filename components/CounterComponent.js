import React from 'react'
import {Text,View,Button} from "react-native";
import CounterValueDisplay from './CounterValueDisplay'
import {incrementCountAction} from '../Actions/ActionTypes'
import {decrementCountAction} from '../Actions/ActionTypes'
import { connect } from 'react-redux';

export  class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value : 0
    }
  }

    // increment() {
    //  this.setState({value : this.state.value + 1})
    // }

    // decrement() {
    //  this.setState({value : this.state.value - 1})
    // }


  render(){
    const { navigation:navigate } = this.props;
    const titleText = "Counter State value : " + this.props.value;
    return (<View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text> {titleText} </Text>
              <Button onPress = {() => {
                   console.log("incre")
                    this.props.increment()
                  }} 
                      title="increment"
                      color="#841584"/>
              <Button onPress = {() => {
                                   console.log("decre")
                                   this.props.decrement()
              }}
                      title="decrement"
                      color="#841584"/>
              <Button onPress ={ ()=> navigate.navigate("Details")} 
                      title="displayStoreValue"
                      color="#841584"/>
                      
               <CounterValueDisplay countValue={this.props.value}/>
           </View>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementCountAction()),
  decrement: () => dispatch(decrementCountAction())
})

const mapStateToProps = (state) => ({
  value : state.counterReducer.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

