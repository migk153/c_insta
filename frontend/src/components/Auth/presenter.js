import React from "react";
import styles from './styles.module.scss';

const Auth = (props, context) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img className={styles.phoneImg} src={require("images/phone.png")} alt="Check our app. It's cool" />
        </div>
        <div className={styles.column}>
            <div className={styles.whiteBox}>
            {props.action === "login" && (
                                <p>
                                    Don't have an account?{" "}
                                    <span onClick={props.changeAction} className={styles.changeLink}>
                                    Sign up
                                    </span>
                                </p>)}
            {props.action === "signup" && (
                                <p>
                                    Have an account?{" "}
                                    <span onClick={props.changeAction} className={styles.changeLink}>
                                    Log in
                                    </span>
                                </p>)}
            </div>
            <div className={styles.appBox}>
                <span>Get the App</span>
                <div className={styles.appstores}>
                    <img src={require("images/ios.png")} alt='Download it from the Apple Appstore'/>
                    <img src={require("images/android.png")} alt="Download it on the Apple Appstore"/>
                </div>
            </div>
        </div>
    </main>
);

export default Auth;