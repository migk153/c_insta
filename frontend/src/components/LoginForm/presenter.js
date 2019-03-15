import React from "react";
import PropTypes from "prop-types";
//import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import FacebookLogin from "react-facebook-login";
import styles from "components/shared/formStyles.module.scss"

const LoginForm = (props, context) => (
    <div className={styles.formComponent}>
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <input type="text"
            placeholder={context.t("Username")}
            className={styles.textInput}
            value={props.usernameValue}
            onChange={props.handleInputChange}
            name="username"/> 
            <input type="password"
            placeholder={context.t("Password")}
            className={styles.textInput}
            value={props.passwordValue}
            onChange={props.handleInputChange}
            name="password"/> 
            <input type="submit"
            placeholder={context.t("Log in")}
            className={styles.button}/> 
        </form>
        <span className={styles.divider}>{context.t("or")}</span>
            {/* <LogoFacebook fontSize="20px" color="#385185" />
            {context.t("Log in with Facebook")} */}
        <FacebookLogin
            appId="322789175044988"
            autoLoad={false}
            fields="name,email,picture"
            cssClass={styles.facebookLink}
            callback={props.handleFacebookLogin}
            icon="fab fa-facebook-square"
            textButton={context.t("Log in with Facebook")}
        />

        <span className={styles.forgotLink}>{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default LoginForm;