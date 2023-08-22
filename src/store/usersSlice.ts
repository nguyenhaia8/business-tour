import {createSlice} from '@reduxjs/toolkit'
import {AppState} from './store'
import {HYDRATE} from 'next-redux-wrapper'

interface IUser {
  name: string
  value: string
  avt: string
}
// Type for our state
export interface UsersState {
  data: IUser[]
}

// Initial state
const initialState: UsersState = {
  data: [],
}

// Actual Slice
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.data = action.payload
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      }
    },
  },
})

export const {setUsers} = usersSlice.actions

export const selectUsersState = (state: AppState) => state.users.data

export default usersSlice.reducer
