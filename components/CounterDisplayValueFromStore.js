
import React from 'react'
import { View,Text} from "react-native";
import { connect } from 'react-redux';

export  class CounterDisplayValueFromStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0
    }
  }


  render(){
    const titleText = "Counter State value from Store: "+this.props.value;
    console.log("Pressed") 
    return (<View>
              <Text> {titleText} </Text>
           </View>)
  }
}

const mapStateToProps = (state) => ({
  value : state.counterReducer.value,
});

export default connect(mapStateToProps)(CounterDisplayValueFromStore);



