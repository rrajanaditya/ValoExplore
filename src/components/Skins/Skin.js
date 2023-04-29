import React from 'react'
import "./Skin.css"

const Skin = (props) => {
    return (
        <div className="skin">
            <div className="skin-img">
                <img src={props.img} alt="" />
            </div>
            {
                props.vp > 0
                    ?
                    <span className="skin-vp">
                        {props.vp}vp
                    </span>
                    :
                    null
            }
            <div className="skin-name">
                {props.name}
            </div>
        </div>
    )
}

export default Skin