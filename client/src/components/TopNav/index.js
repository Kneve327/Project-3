import React from "react";
import "./style.css";

class TopNav extends React.Component {
    render() {
        return (
            <div>


                <div id="topnav" className="navbar">

                <a href="/myprofile/1"><i id="profilePicture" className="faButton fas fa-user icon-cog"></i></a>

                <p id="title" className="navbar-brand">STATEMENT</p>

                <div className="d-flex justify-content-end">
                <a href="/Home"><i id="home" className="faButton fas fa-home icon-cog"></i></a>
                <a href="/"><i id="search" className="faButton fas fa-search icon-cog"></i></a>
                {/* <a href="/"><i id="notifications" className="faButton fas fa-bolt icon-cog"></i></a> */}

                <div id="fa-plus"><i className="faButton fas fa-plus icon-cog"></i></div>


                </div>

                </div>


            </div>
        )
    }
}

export default TopNav;