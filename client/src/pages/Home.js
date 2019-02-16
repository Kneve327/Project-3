import React, {Component} from "react";
import TopNav from "../components/TopNav";
import InputBox from "../components/InputBox";
import PostContainer from"../components/PostContainer";


class Home extends Component {

    render () {
        return (
            <div>

            <TopNav />

            <InputBox /> 

            <PostContainer />        
    
            </div>
        )
    }
}

export default Home;