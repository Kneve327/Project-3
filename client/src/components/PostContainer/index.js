import React from "react";
import "./style.css";

class PostContainer extends React.Component {
    render() {
        return (
            <div className="postContainer">

                <header></header>

                <textarea rows='5' cols='40' id='post-textBody'></textarea>

            </div>
        )
    }
}

export default PostContainer;