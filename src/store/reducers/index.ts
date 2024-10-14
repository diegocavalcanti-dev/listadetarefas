import { combineReducers } from 'redux'
import contatosReducer from './contatos'

const rootReducer = combineReducers({
  contatos: contatosReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
