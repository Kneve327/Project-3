import React, {Component} from "react";
import API from "../utils/API"
import TopNav from "../components/TopNav"
import "./style.css";



class MyProfile extends Component {


    state = {
        user: {
            first_name: "",
            last_name: "",
            email: "",
            username: ""
        }
    };

    componentDidMount() {
        this.loadUser();
    };

    loadUser = event => {
        API.getUser(1)
          .then(res => {
            console.log(res) 
            this.setState({ user: res.data})
          })
          .catch(err => console.log(err));
    };


    

    render () {
        console.log(this.state);
        return (
            <div>

                <TopNav />

                <p>DIS MY PROFILE PAGEEEEE</p>

               
                
                <p className="formLabel" id="firstFormLabel">First Name</p>
                <button id="fnButton" className="myprofForm" name="first_name" >{this.state.user.first_name}</button>
                <p className="formLabel" id="secondFormLabel">Last Name</p>
                <button id="lnButton" className="myprofForm" name="last_name" >{this.state.user.last_name}</button>
                <p className="formLabel" id="thirdFormLabel">Username</p>
                <button id="unButton" className="myprofForm"  name="username" >{this.state.user.username}</button>
                <p className="formLabel" id="fourthFormLabel">Email</p>
                <button id="emailButton" className="myprofForm" name="email" >{this.state.user.email}</button>
                
               
            </div>
        )
    }
}

export default MyProfile;