import {combineReducers} from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './fbloginReducer'
const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer
})

export default rootReducer;