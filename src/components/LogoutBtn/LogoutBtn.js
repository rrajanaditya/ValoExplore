import React from 'react'
import "./LogoutBtn.css"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const LogoutBtn = (props) => {
    const navigate = useNavigate()
    const logoutHandler = (e) => {
        props.setUsername("");
        navigate('/')
    }
    return (
        <div className="logout-btn">
            <FontAwesomeIcon icon={faRightFromBracket} size='2xl' onClick={logoutHandler} />
            <div className="logout-text">Logout</div>
        </div>
    )
}

export default LogoutBtn