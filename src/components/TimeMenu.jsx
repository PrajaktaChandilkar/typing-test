import React from "react";
import { useTestMode } from "../context/TestModeContext";

const TimeMenu = ({ countDown }) => {

    const {setTestTime} = useTestMode();

    const updateTime = (e) =>{
        setTestTime(e.target.id);
    }
    return (
        <>
            <div className="times-menu">
                <div className="selected-time">{countDown}</div>
                <div className="choose-time">
                    <div className="set-time" id={15} onClick={(e)=>updateTime(e)}>15s</div>
                    <div className="set-time" id={30} onClick={(e)=>updateTime(e)}>30s</div>
                    <div className="set-time" id={60} onClick={(e)=>updateTime(e)}>60s</div>
                </div>

            </div>
        </>
    )
}
export default TimeMenu