import React, {Component} from "react";
// import TopNav from "../components/TopNav";
import InputBox from "../components/InputBox";
import PostContainer from "../components/PostContainer";
// import FooterBlank from "../components/FooterBlank"


class Home extends Component {

    render () {
        return (
            <div id="homeDiv">

            {/* <TopNav /> */}

            <InputBox /> 

            <PostContainer />

            {/* <FooterBlank />         */}
    
            </div>

        )
    }
}

export default Home;