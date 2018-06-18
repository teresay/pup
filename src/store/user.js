import axios from 'axios'

/**
 * ACTION TYPES
 */

const SET_LOCATION = 'SET_LOCATION'
const SET_USER = 'SET_USER'


/**
 * INITIAL STATE
 */

const initialState = {
  user: {},
  location: []
}

/**
 * ACTION CREATORS
 */

const settingLocation = (coordinates) => {
  console.log('in the action creator', coordinates)
  return {
  type: SET_LOCATION,
  coordinates
}}

const authenticate = (user) => {
  console.log('in the authenticate ac')
  return {
    type: SET_USER,
    user
  }
}


/**
 * THUNK CREATORS
 */

export const auth  = (email, password, navigation) => async dispatch => {
  console.log('in the auth', email, password)
  const key = {email: "arya@w.com",password: "arya"}
  console.log('key is', key)
  const user = await axios.put(`http://localhost:7000/api/auth/login`, {key})
  console.log('auth user is', user)
  navigator.geolocation.getCurrentPosition(
    async (position) => {
       const longitude = Number(position.coords.longitude)
       const latitude = Number(position.coords.latitude)
       const newPosition = [latitude, longitude]
       console.log('newPosition', newPosition, latitude, longitude)
       await axios.put(`http://localhost:7000/api/users/location/${userId}`, newPosition)
       dispatch(settingLocation(newPosition))
    }
 );
  dispatch(authenticate(user))
  navigation.navigate("Home")
}

export const setLocation = (userId) => async dispatch => {
  console.log('reached setlocation thunker')
  navigator.geolocation.getCurrentPosition(
    async (position) => {
       const longitude = Number(position.coords.longitude)
       const latitude = Number(position.coords.latitude)
       const newPosition = [latitude, longitude]
       console.log('newPosition', newPosition, latitude, longitude)
       await axios.put(`http://localhost:7000/api/users/location/${userId}`, newPosition)
       dispatch(settingLocation(newPosition))
    }
 )
}

export const getLocation = () => dispatch => {
  console.log('in the getLocation thunk')
  navigator.geolocation.getCurrentPosition(
    async (position) => {
       const longitude = Number(position.coords.longitude)
       const latitude = Number(position.coords.latitude)
       const newPosition = [latitude, longitude]
       console.log('newPosition', newPosition, latitude, longitude)
      //  await axios.put(`http://localhost:7000/api/users/location/${userId}`, newPosition)
       dispatch(settingLocation(newPosition))
    }
 );
}




/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION: {
      console.log('in the reducer', action.coordinates)
      return {...state, location: action.coordinates}
    }
    case SET_USER: {
      console.log('in the set user reducer', action.user)
      return {...state, info: action.user}
    }
    default:
      return state
  }
}
