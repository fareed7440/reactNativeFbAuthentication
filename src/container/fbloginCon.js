import Login from '../components/fblogin'
import {connect} from 'react-redux'
import loginRequest from '../store/actions/fbloginAct'
function mapStateToProps(state){
    return{
        logedIn : state.LoginReducer

    }
   
}

function mapDispatchToProps(dispatch){
return{
    loginData : (data)=>dispatch(loginRequest(data))

}
}



LoginCon = connect (mapStateToProps,mapDispatchToProps)(Login)
export default LoginCon;
