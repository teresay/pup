import axios from 'axios'

/**
 * ACTION TYPES
 */

const SET_LOCATION = 'SET_LOCATION'


/**
 * INITIAL STATE
 */

const initialState = {}

/**
 * ACTION CREATORS
 */

const settingLocation = (coordinates) => ({
  type: SET_LOCATION,
  coordinates
})


/**
 * THUNK CREATORS
 */

export const setLocation = (coordinates, userId) => async dispatch => {
  const fake = [1,1]
  await axios.put(`http://localhost:7000/api/users/location/${userId}`, {fake})
  console.log('reached setlocation thunker')
  dispatch(settingLocation(fake))
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
    default:
      return state
  }
}
