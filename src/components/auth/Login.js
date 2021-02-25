import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Login.css';
import { auth, provider } from '../../firebase'

function Login() {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("")

    const googleSignIn = () => {
        auth.signInWithPopup(provider).catch((e) => {
            console.log(auth);
            alert(e.message);
        });
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
        }).catch((e) => alert(e.message))
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                console.log(auth);
            }
        }).catch((e) => alert(e.message));
    }

    return(
        <div className="login_container">
            <div className="login_storage">
                <div className="login_logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png" alt="logo"/>
                </div>
                <div className="login_description">
                    <p>A Space to Share Knowledge and Discuss Differences</p>
                    <p style={{color: "orange", fontSize: "22px"}}>
                        Developed with desire by{" "}
                    </p>
                    <h3>Ahmed Omer</h3>
                </div>
                <div className="login_auth">
                    <div className="login_auth_options">
                        <div className="login_auth_option">
                            <img className="googleAuth" src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg" alt="googLogin"/>
                            <p onClick={googleSignIn}>Continue With Google</p>
                        </div>
                        <div className="login_auth_option">
                            <img className="googleAuth" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="fbook"/>
                            <span>Continue with Facebook</span>
                        </div>
                        <div className="login_authDesc">
                            <p>
                                <span style={{color: "blue", cursor: "pointer"}}>
                                    Sign up with Email
                                </span>
                                . By continuing you indicate that you have read and agreed to the site's
                                <span style={{color: "blue", cursor: "pointer"}}>
                                    Terms of Service.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="login_email">
                        <div className="login_label">
                            <h4>login</h4>
                        </div>
                        <div className="login_inputs">
                            <div className="login_input">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                            </div>
                            <div className="login_input">
                                <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="login_forgot">
                            <small>Forgot Password?</small>
                            <button onClick={handleSignIn}>Login</button>
                        </div>
                        <button onClick={handleRegistration}>Register</button>
                    </div>
                </div>
                <div className="login_language">
                    <ArrowForwardIosIcon/>
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>Languages</p>
                    <p>Careers</p>
                    <p>Businesses</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                    <p>&copy; A.Omer</p>
                </div>
            </div>
        </div>
    )
}

export default Login;