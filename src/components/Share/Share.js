import React from 'react'
import './Share.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const Share = (props) => {
    const link = `${window.location.origin.toString()}/${props.username}`
    return (
        <div className="share-container">
            <div className="share-box">
                <div>
                    Here is your link:
                </div>
                <br />
                <div>
                    <FontAwesomeIcon icon={faCopy} style={{ paddingRight: '16px' }}
                        onClick={() => { navigator.clipboard.writeText(link); }} />
                    {link}
                </div>
            </div>
        </div>
    )
}

export default Share    