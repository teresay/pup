import React, {Component} from 'react'
import { StyleSheet, Text, View, Button, AppRegistry } from "react-native";
import t from 'tcomb-form-native'
import {connect} from 'react-redux'
import {auth} from '../store/user'

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

  handleSubmit() {
    const value = this._form.getValue()
    const {navigation, screenProps} = this.props
    this.props.auth(value.email, value.password, navigation)

    console.log('value', value.email)
  }

  handleChange() {
    console.log('handling change')
  }

  render() {
    return (
      // <View>
      //   <form onSubmit={this.handleSubmit}>
      //     <View className="row">
      //       <View>
      //         <label htmlFor="email">
      //           <small>Email</small>
      //         </label>
      //         <input name="email" type="text" onChange={this.handleChange} />
      //       </View>
      //     </View>
      //     <View className="row">
      //       <View className="input-field col s10 m5">
      //         <label htmlFor="password">
      //           <small>Password</small>
      //         </label>
      //         <input name="password" type="password" />
      //       </View>
      //     </View>
      //     <View>
      //       <button
      //         type="submit"
      //         className="btn waves-effect waves-light green"
      //       >
      //         {displayName}
      //       </button>
      //     </View>
      //   </form>
      //   {/* <a href="/auth/google">
      //     <img
      //       className="google-btn"
      //       src="http://www.setyourowntests.com/_/rsrc/1468869481521/help/accounts/btn_google_signin_dark_normal_web%402x.png"
      //     />
      //   </a> */}
      // </View>
      <View style={styles.container}>
      <Form ref={c=> this._form = c} type={User} />
      <Button title="Sign In!" onPress={this.handleSubmit}/>
      </View>

    )
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



const mapDispatch = dispatch => {
  return {
    auth: (email, password, navigation) =>
      dispatch(auth(email, password, navigation))
  }
}

export default connect(null, mapDispatch)(Login)
