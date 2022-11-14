import React from "react";

const TimeMenu = ({ countDown }) => {
    return (
        <>
            <div className="times-menu">
                <div className="slected-time">{countDown}</div>
                <div className="choose-time">
                    <div className="set-time">15s</div>
                    <div className="set-time">30s</div>
                    <div className="set-time">60s</div>
                </div>

            </div>
        </>
    )
}
export default TimeMenu