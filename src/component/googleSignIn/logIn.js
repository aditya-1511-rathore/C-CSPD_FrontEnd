import React from "react";

function LogIn(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div id="logDiv" className=" text-center wow fadeIn container row col-md-12">
            <button className="Loginbutton" onClick={logout}>Logout</button>
        </div>
    );
}
export default LogIn;