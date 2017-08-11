import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'
import firebase from 'firebase'
import FBSDK, {LoginManager,AccessToken} from 'react-native-fbsdk'

function loginRequest(data){
    return dispatch=>{

dispatch(LoginRequest());
 LoginManager.logInWithReadPermissions(['public_profile']).then(
function(result) {
if (result.isCancelled) {
alert('Login was cancelled');
} else {
alert('Login successfully with permision' )
  dispatch(LoginRequestSuccess(result))
 Actions.signupCon()
}
},
function(error) {
alert('Login failed with error: ' + error);
}
);
}

  

 

}











function LoginRequest(){
    return{
        type : ActionTypes.LOGIN_REQUEST
    }
}

function LoginRequestSuccess(data){
    return{
        type: ActionTypes.LOGIN_REQUEST_SUCCESS,
        data
    }
}


export default loginRequest



//  var provider = new firebase.auth.FacebookAuthProvider();
//   provider.addScope('email');
// provider.addScope('user_friends');
//        DB.auth.signInWithPopup(provider).then(function(result) {
//             console.log('resultttt',result)
            
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;