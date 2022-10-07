import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/index'
import Cookie from 'js-cookie'


const initialState = {
  accounts: [],
}

const rootReducer = createReducer(initialState, (builder) => {
  builder

  .addCase(actions.POSTPOLICYID.fulfilled, (state, action) => {
    state.accounts=[]
    state.accounts=action.payload.accounts
  })

})
export default rootReducer