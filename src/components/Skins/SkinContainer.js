import React, { useState } from 'react'
import "./SkinContainer.css"
import Skin from './Skin'
import { useEffect } from 'react'
import instance from '../../axios'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from '../LogoutBtn/LogoutBtn'
import BackBtn from '../BackBtn/BackBtn'

const SkinContainer = (props) => {
    const [skinData, setskinData] = useState({});
    const [storeData, setstoreData] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        if (props.history) {
            instance.post("/api/historydata", {
                username: props.username,
                password: ""
            }).then((res) => {
                props.isStore ?
                    setstoreData(res.data.historyData.storeData)
                    :
                    setskinData(res.data.historyData.skinData);
            }).catch(() => {
                navigate("/")
                alert("Error in account! Login again!")
            })
        } else {
            if (props.isStore) {
                instance.post("/api/storeData", {
                    username: props.username,
                    password: ""
                }).then((res) => {
                    setstoreData(res.data.storeData);
                    // setUserData(res.data.userData);
                }).catch(() => {
                    navigate("/")
                    alert("Error in auth! Login again!")
                })
            } else {
                instance.post("/api/skinData", {
                    username: props.username,
                    password: ""
                }).then((res) => {
                    setskinData(res.data.skinData);
                    // setUserData(res.data.userData);
                }).catch(() => {
                    navigate("/")
                    alert("Error in auth! Login again!")
                })
            }
        }


    }, [props.username, navigate, props.isStore, props.history])
    return (
        <div className="skin-container">
            {
                !props.isStore ?
                    Object.keys(skinData).map((key, index) => {
                        return <Skin key={index} name={key} img={skinData[key].skinImage} vp={skinData[key].price} />
                    })
                    :

                    storeData.store?.map((skin, index) => {
                        return <Skin key={index} name={skin['skinName']} img={skin['skinImage']} vp={skin['price']} />
                    })
            }
            {!props.history ? <LogoutBtn setUsername={props.setUsername} /> : null}
            <BackBtn />
        </div>
    )
}

export default SkinContainer