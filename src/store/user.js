import axios from 'axios'
import {Actions} from 'react-native-router-flux'


/**
 * ACTION TYPES
 */

const SET_LOCATION = 'SET_LOCATION'
const SET_USER = 'SET_USER'
const FETCH_ONLINE_DOGS = 'FETCH_ONLINE_DOGS'


/**
 * INITIAL STATE
 */

const initialState = {
  // info: {},
  // location: []
}

/**
 * ACTION CREATORS
 */

const settingLocation = (coordinates) => {
  console.log('in the settingLocation action creator', coordinates)
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

const fetchingOnlineDogs = (dogs) => {
  return {
    type: FETCH_ONLINE_DOGS,
    dogs
  }
}


/**
 * THUNK CREATORS
 */

export const auth  = (email, password, navigation) => async dispatch => {
  console.log('in the auth', email, password)
  const key = {email: email,password: password}
  console.log('key is', key)
  const user = await axios.put(`http://localhost:7000/api/auth/login`, {key})
  console.log('auth user is', user.data)

  const newPosition = [10, 10]
  // dispatch(settingLocation(newPosition))
  // console.log('dispatched settingLocation')
  dispatch(authenticate(user.data))
  console.log('dispatchted authenticate')
//   navigator.geolocation.getCurrentPosition(
//     async (position) => {
//       console.log('IN NAVIGATION!!')
//        const longitude = Number(position.coords.longitude)
//        const latitude = Number(position.coords.latitude)
//        const newPosition = [10, 10]
//        console.log('newPosition', newPosition, latitude, longitude)
//        await axios.put(`http://localhost:7000/api/users/location/${user.data.id}`, newPosition)
//        console.log('AXIOS IS DONE')
//        dispatch(settingLocation(newPosition))
//        console.log('setting location dispatch finished')
//        console('dispatches have finished', navigation)
//         dispatch(authenticate(user.data))
//       Actions.search()
//     }
//  );
}

export const setLocation = (userId) => async dispatch => {
  console.log('reached setlocation thunker')
  navigator.geolocation.getCurrentPosition(
    async (position) => {
       const longitude = Number(position.coords.longitude)
       const latitude = Number(position.coords.latitude)
       const newPosition = [10, 10]
       console.log('newPosition', newPosition, latitude, longitude)
       await axios.put(`http://localhost:7000/api/users/location/${userId}`, newPosition)
       console.log('made axios put request in setLocation')
       dispatch(settingLocation(newPosition))
    }
 )
}

export const getLocation = (userId) => async dispatch => {
  console.log('in the getLocation thunk')
  navigator.geolocation.getCurrentPosition(
    async (position) => {
       const longitude = Number(position.coords.longitude)
       const latitude = Number(position.coords.latitude)
       const newPosition = [latitude, longitude]
       console.log('newPosition', newPosition, latitude, longitude)
      //  await axios.put(`http://localhost:7000/api/users/location/${userId}`, newPosition)
       console.log('just sent axios call with newPosition', newPosition)
       dispatch(settingLocation(newPosition))
       console.log('getLocation has disptachted setting location')
    }
 );
}

export const fetchOnlineDogs = () => async dispatch => {
  const response = await axios.get(`http://localhost:7000/api/users/active/1`)
  dispatch(fetchingOnlineDogs(response.data))
}




/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION: {
      console.log('in the set location reducer', action.coordinates)
      const newstate = {...state, location: action.coordinates}
      return newstate
    }
    case SET_USER: {
      console.log('in the set user reducer', action.user)
      const newuser = {...state, info: action.user}
      return newuser
    }
    case FETCH_ONLINE_DOGS: {
      console.log('in the fetch online dogs reducer', action.dogs)
      const dogs = {...state, onlineDogs: action.dogs}
      return dogs
    }
    default:
      return state
  }
}
