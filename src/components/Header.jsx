import React from "react";
import AccountIcon from "./AccountIcon";
const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
               {/* <img src="https://i.pinimg.com/736x/f5/af/8f/f5af8f0c1fe9a022b36ee852f09deed6.jpg" alt="img" srcset="" className="logo" />
                */}
                <img src="https://st.depositphotos.com/1056464/4245/v/450/depositphotos_42454801-stock-illustration-flower-symbol.jpg" alt="" srcset="" className="logo" />
            </div>
            <div className="icon">  <AccountIcon/> </div>
        </div>
    )
}

export default Header