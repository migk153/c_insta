import { connect } from "react-redux";
import Container from "./container";
import { actionCreator as userAction } from "redux/modules/user";

const mapDispatchToProps = ( dispatch, ownProps) => {
    return{
        facebookLogin: (access_token) =>{
            dispatch(userAction.facebookLogin(access_token));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container); 
// 커넥트의 첫번째 자리는 map state to props를 받기 때문에 null 값 준다.