import React from 'react'
import "./BackBtn.css"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

const BackBtn = () => {
    const navigate = useNavigate()
    const backHandler = (e) => {
        navigate('-1')
    }
    return (
        <div className="back-btn">
            <FontAwesomeIcon icon={faBackward} size='2xl' onClick={backHandler} />
            <div className="back-text">Back</div>
        </div>
    )
}

export default BackBtn