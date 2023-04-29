import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./Account.css"
import Navbar from './Navbar'
import SkinContainer from '../Skins/SkinContainer'
import Details from '../Details/Details'
import Share from '../Share/Share';

const Account = (props) => {
    return (
        <div className="account-container">
            <div className="account-box">
                <Navbar />
                <Routes>
                    <Route path='/*' element={<Details username={props.username} setUsername={props.setUsername} history={props.history} />}></Route>
                    <Route path='/inventory' element={<SkinContainer username={props.username} setUsername={props.setUsername} history={props.history} />}></Route>
                    <Route path='/store' element={<SkinContainer username={props.username} setUsername={props.setUsername} isStore={true} history={props.history} />}></Route>
                    <Route path='/share' element={<Share username={props.username} />}></Route>

                </Routes>

            </div>
        </div>
    )
}

export default Account