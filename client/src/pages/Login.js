import React, {Component} from "react";
// import TopNav from "../components/TopNav";
import TopNavBlank from "../components/TopNavBlank";
import API from "../utils/API";
import "./style.css";

class Login extends Component {

    state = {
        users: [],
        email: "",
        password: ""
    };

    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            API.loginUser({
                
                email: this.state.email,
                password: this.state.password

            })
            .then(res => console.log(res) 
                // localStorage.setItem('users', this.state.users.id);
                // console.log(localStorage)
                // console.log(this.state.users)
            )
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
            <div>

                {/* <TopNav /> */}
                <TopNavBlank />

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="loginPassword" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} name="password" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" id="loginButton" disabled={!(this.state.email && this.state.password)} onClick={this.handleSubmitForm}>Submit</button>
                </form>


            </div>
        )
    }
}

export default Login;