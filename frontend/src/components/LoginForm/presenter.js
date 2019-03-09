import React from "react";
import PropTypes from "prop-types";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import styles from "components/shared/formStyles.module.scss"

const LoginForm = (props, context) => (
    <div className={styles.formComponent}>
        <form className={styles.form}>
            <input type="text" placeholder={context.t("Username")} className={styles.textInput} /> 
            <input type="password" placeholder={context.t("Password")} className={styles.textInput} /> 
            <input type="submit" placeholder={context.t("Log in")} className={styles.button} /> 
        </form>
        <span className={styles.divider}>{context.t("or")}</span>
        <span className={styles.facebookLink}>
            <LogoFacebook fontSize="20px" color="#385185" />
            {context.t("Log in with Facebook")}</span>
        <span className={styles.forgotLink}>{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default LoginForm;