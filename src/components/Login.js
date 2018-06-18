import React, {Component, PropTypes} from 'react'
import { StyleSheet, Text, View, Button, AppRegistry } from "react-native";
import t from 'tcomb-form-native'
import {connect} from 'react-redux'
import {auth, setLocation} from '../store/user'
import {Actions} from 'react-native-router-flux'

/**
 * COMPONENT
 */

 const Form = t.form.Form

 const User = t.struct({
   email: t.String,
   password: t.String
 })



class Login extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = async() => {
    const value = this._form.getValue()
    const {navigation, screenProps} = this.props
    console.log('trying to handleSubmit', value.email, value.password, navigation)
    await this.props.auth(value.email, value.password, navigation)
    console.log('finished this.props.auth')
    await this.props.setLocation(this.props.info.id)
    console.log('finished this.props.setLocation')

    Actions.search()
  }

  handleChange() {
    console.log('handling change')
  }

  render() {
    return (
      <View style={styles.container}>

      <Form ref={c=> this._form = c} type={User} options ={options}/>
      <Button title="Sign In!" onPress={this.handleSubmit}/>
      </View>

    )
  }
}



const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
    padding: 20,
    position: 'absolute',
    backgroundColor: 'white'
  }
})

const options = {
  fields : {
    email: {
      autoCapitalize: 'none',
      error: 'Please enter your email'
    },
    password: {
      autoCapitalize: 'none',
      secureTextEntry: true,
      error: 'Please enter a valid password'

    }
  },
  stylesheet: formStyles
}


// Login.propTypes = {
//   auth: PropTypes.func
// };

const mapState = state => {
  return {
    info: state.user.info
  }
}

const mapDispatch = dispatch => {
  return {
    auth: (email, password, navigation) =>
      dispatch(auth(email, password, navigation)),
    setLocation: (userId) => dispatch(setLocation(userId))
  }
}

export default connect(mapState, mapDispatch)(Login)
