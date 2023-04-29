import React, { useEffect, useState } from 'react'
import instance from '../../axios'
import { useNavigate } from 'react-router-dom'
import "./Details.css"
import LogoutBtn from '../LogoutBtn/LogoutBtn'

const Details = (props) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState([]);
    const [rankData, setRankData] = useState([]);
    useEffect(() => {
        if (props.history) {
            instance.post("/api/historydata", {
                username: props.username,
                password: ""
            }).then((res) => {
                setUserData(res.data.historyData.userData);
                setRankData(res.data.historyData.rankData.rank);
            }).catch((err) => {
                console.log(err)
                navigate("/")
                alert("Error finding account! Login again!")
            })
        } else {
            instance.post("/api/userdata", {
                username: props.username,
                password: ""
            }).then((res) => {
                setUserData(res.data.userData);
            }).catch((err) => {
                console.log(err)
                navigate("/")
                alert("Error in auth! Login again!")
            })
            instance.post("/api/rankdata", {
                username: props.username,
                password: ""
            }).then((res) => {
                setRankData(res.data.rankData.rank);
            }).catch((err) => {
                console.log(err)
                navigate("/")
                alert("Error in auth! Login again!")
            })
        }

    }, [props.history, props.username, navigate])

    return (
        <div className='details-container'>
            <div className="account-info">
                <div className="heading-text">
                    Main Details
                </div>
                <div className="user-details">

                    <div className="user-img">
                        <img src={userData.smallCard || ""} alt="" />
                    </div>
                    <div className="column">
                        <div className="row">
                            <div className='small-header'>
                                Riot ID
                            </div>
                            <div className="sub-text">
                                {`${userData.gameName}#${userData.tagLine}`}
                            </div>

                        </div>
                        <div className="row">
                            <div className="small-header">
                                Username
                            </div>
                            <div className="sub-text">
                                {props.username}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row">
                            <div className="small-header">
                                Title
                            </div>
                            <div className="sub-text">
                                {userData.title ? userData.title.split(" ")[0] : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-header">
                                Level
                            </div>
                            <div className="sub-text">
                                {userData.Level}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row">
                            <div className="small-header">
                                Region
                            </div>
                            <div className="sub-text">
                                {userData.region}
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-header">
                                Country
                            </div>
                            <div className="sub-text">
                                {userData.country}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row">
                            <div className="small-header">
                                Email Registered
                            </div>
                            <div className="sub-text">
                                {userData.emailVerified ? "Yes" : "No"}
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-header">
                                Registration Date
                            </div>
                            <div className="sub-text">
                                {userData.creationDate}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rank-info">
                <div className="heading-text">
                    Rank Data
                </div>
                {
                    rankData.map((e, index) => {
                        return <div className="rank" key={index}>
                            <div className="rank-episode xs-small-header">
                                {e ? e.season : ""}
                            </div>
                            <div className="rank-image">
                                <img src={e.tierIcon || ""} alt="" />
                            </div>
                        </div>
                    })
                }
            </div>
            {!props.history ? <LogoutBtn setUsername={props.setUsername} /> : null}
        </div>
    )
}

export default Details