import React from 'react'
import './Share.css'

const Share = (props) => {
    const link = `${window.location.origin.toString()}/savedaccount/${props.username}`
    return (
        <div className="share-container">

            <div className='share-text'>
                Here is your link:
            </div>
            <div className='share-link'>
                {link}
            </div>
            <div className='share-copy' onClick={() => { navigator.clipboard.writeText(link); alert('Copied link to clipboard.')}}>Copy</div>
        </div>
    )
}

export default Share    