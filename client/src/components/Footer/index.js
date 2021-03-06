import React from "react";
import "./style.css";

class Footer extends React.Component {
    render() {
        return (
            <div>

                <footer class="footer">
                <div class="container">
                    <span class="text-muted">
                    <div id="footerButtons" class="d-flex justify-content-between">
                        <a href="/"><i id="homeFooter" class="faButton fas fa-home icon-cog"></i></a>
                        <a href="/api/user"><i id="searchFooter" class="faButton fas fa-search icon-cog"></i></a>
                        <a href="/"><i id="postFooter" class="faButton fas fa-plus icon-cog"></i></a>
                        <a href="/"><i id="notificationsFooter" class="faButton fas fa-bolt icon-cog"></i></a>
                        <a href="/myprofile"><i id="profileFooter" class="fas fa-user icon-cog"></i></a>
                    </div>
                    </span>
                </div>
                </footer>

            </div>
        )
    }
}

export default Footer;