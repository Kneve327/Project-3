import React, {Component} from "react";
import API from "../utils/API";
// import TopNav from "../components/TopNav";
import TopNavBlank from "../components/TopNavBlank"
import FooterBlank from "../components/FooterBlank";
import "./style.css";



class Signup extends Component {

    state = {
        users: [],
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
    };

    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.email && this.state.password && this.state.username && this.state.first_name && this.state.last_name) {
            API.saveUsers({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            })
            .then(
                
                
                console.log(this.state.password)
            )
            .catch(err => console.log(err));
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    render () {
        return (
            <div className="divBod">
            {/* <TopNav /> */}
            <TopNavBlank />

            <div id="littleBox" className="card mb-3">
            
                <h5><strong>SIGN UP HERE</strong></h5>
            
            </div>


            <div className="signupCardContainer">

            <div className="card mb-3">
            <div className="card-body">
                {/* <h5 className="card-title">Sign Up Here</h5> */}
                <div className="row">
                <div className="col">
                <div>
                    {/* <label htmlFor="inputFirstName">First Name</label> */}
                    <input type="text" className="form-control" id="fn-input" placeholder="First Name" value={this.state.first_name} onChange={this.handleInputChange} name="first_name" />
                </div>
                </div>
                <div className="col">
                <div >
                    {/* <label htmlFor="inputLastName">Last Name</label> */}
                    <input type="text" className="form-control" id="ln-input" placeholder="Last Name" value={this.state.last_name} onChange={this.handleInputChange} name="last_name" />
                </div>
                </div>
                </div>
                {/* <br></br> */}
                <div className="row">
                <div className="col">
                <div >
                    {/* <label htmlFor="inputSUEmail">Email address</label> */}
                    <input type="email" className="form-control" id="email-su-input" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                </div>
                </div>
                <div className="col">
                <div >
                    {/* <label htmlFor="inputUsername">Username</label> */}
                    <input type="text" className="form-control" id="username-input" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} name="username" />
                </div>
                </div>
                </div>                
                {/* <br></br> */}
                <div className="col-md-6">
                    {/* <label htmlFor="inputSUPassword">Password</label> */}
                    <input type="password" className="form-control" id="password-su-input" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} name="password" />
                </div>
                {/* <br></br> */}
                <button type="submit" id="submit-su-button" className="btn btn-default" disabled={!(this.state.email && this.state.password && this.state.username && this.state.first_name && this.state.last_name)} onClick={this.handleSubmitForm} >Sign Up</button>
            </div>
            </div>

            </div>

            <FooterBlank />
            
            </div>
        )
    }
}



export default Signup;