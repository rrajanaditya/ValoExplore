import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Login.css'
import logo from "../../images/logo.png"
import backgroundImage from '../../images/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import instance from "../../axios";

const Login = (props) => {
    const navigate = useNavigate()
    const [passwordType, setPasswordType] = useState("password")
    const [showPass, setshowPass] = useState(false);
    const [showEye, setshowEye] = useState(false);
    const [bothValid, setbothValid] = useState({ first: false, second: false });
    const username = props.username
    const setUsername = props.setUsername
    const [password, setPassword] = useState("");
    useEffect(() => {
        if (params.username) {
            setUsername(params.username)
            props.setHistory(true)
            navigate('/account')
            return;
        }
        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                submitHandler();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    })
    const viewPassword = () => {
        setPasswordType((prevState) => {
            if (prevState === "password")
                return "text"
            else
                return "password"
        })
        setshowPass((prevState) => {
            return !prevState
        });

    }
    const usernameHandler = (e) => {
        if (e.target.value !== "") {
            setbothValid((prevState) => {
                return { ...prevState, first: true }
            });

        } else {
            setbothValid((prevState) => {
                return { ...prevState, first: false }
            });
        }
        setUsername(e.target.value);
    }
    const passwordHandler = (e) => {
        if (e.target.value !== "") {
            setbothValid((prevState) => {
                return { ...prevState, second: true }
            });
            setshowEye(true);
        } else {
            setshowEye(false);
            setshowPass(false);
            setPasswordType("password");
            setbothValid((prevState) => {
                return { ...prevState, second: false }
            });
        }
        setPassword(e.target.value);
    }
    const submitHandler = (e) => {
        instance.post("/api/authenticate", {
            username: username,
            password: password
        }).then((res) => {
            if (res.data.message === "Auth Success") {
                navigate('account')
                setPassword("")
            } else {
                alert("Wrong username/password!")
            }
        })
    }
    let params = useParams()
    
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-items">
                    <div className="logo">
                        <img id="logo" src={logo} alt="ValoExplore logo" />
                    </div>
                    <div className="inputs">
                        <div className="username">
                            <input required type="text" name="username" id="username" className='login-input' value={username} onChange={usernameHandler} />
                            <span className='placeholder'>Username</span>

                        </div>
                        <div className="password">
                            <input required type={passwordType} name="password" id="password" value={password} className='login-input'
                                onChange={passwordHandler} />
                            <span className='placeholder'>Password</span>
                            {showEye ? <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} id='password-eye'
                                onClick={viewPassword} /> : null}
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight}
                        className={bothValid.first === true && bothValid.second === true ? "submit-btn-valid" : "submit-btn-normal"}
                        size="2x" color='red' onClick={submitHandler} />
                </div>

                <div className="image">
                    <img src={backgroundImage} alt="Jett and Phoenix" className='background-image' />
                </div>
            </div>
        </div>
    )
}

export default Login