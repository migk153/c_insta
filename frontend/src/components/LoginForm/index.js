import { connect } from "react-redux";
import Container from "./container";
import { actionCreator as userActions } from "redux/modules/user";

const mapDispatchToProps = ( dispatch, ownProps) => {
    return{
        facebookLogin: (access_token) =>{
            dispatch(userActions.facebookLogin(access_token));
        },
        usernameLogin: (email, password) =>{
            dispatch(userActions.usernameLogin(email, password))
        }
    }
}

export default connect(null, mapDispatchToProps)(Container); 
// 커넥트의 첫번째 자리는 map state to props를 받기 때문에 null 값 준다.