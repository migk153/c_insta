import React from "react";
//import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import styles from "components/shared/formStyles.module.scss"

const SignupForm = (props, context) => (
    <div className={styles.formComponent}>
        <h3 className={styles.signupHeader}>{context.t("Sign up to see photos and videos from your friends.")}</h3>
        <FacebookLogin
            appId="322789175044988"
            autoLoad={true}
            fields="name,email,picture"
            cssClass={styles.facebookLink}
            callback={props.handleFacebookLogin}
            icon="fab fa-facebook-square"
            textButton={context.t("Log in with Facebook")}
        />
        <span className={styles.divider}>{context.t("or")}</span>
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <input type="email"
             placeholder={context.t("Email")}
              className={styles.textInput}
              name="email"
              onChange={props.handleInputChange}
              />
            <input type="text"
             placeholder={context.t("Full name")}
              className={styles.textInput}
              name="fullname"
              onChange={props.handleInputChange}
              />
            <input type="username"
             placeholder={context.t("Username")}
              className={styles.textInput}
              name="username"
              onChange={props.handleInputChange}
              />
            <input type="password"
             placeholder={context.t("Password")}
              className={styles.textInput}
              name="password"
              onChange={props.handleInputChange}
              />
            <input type="submit" placeholder={context.t("Sign up")} className={styles.button}/>
        </form>
        <p className={styles.terms}>
        {context.t("By signing up, you agree to our")} <span>{context.t("Terms & Privacy Policy.")}</span>
        </p>
    </div>
);


SignupForm.propTypes ={
    emailValue: PropTypes.string.isRequired,
    fullnameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default SignupForm;