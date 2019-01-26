import React, {Component} from "react";


class Signup extends Component {
    render () {
        return (
            <div>

            <p>Hello World</p>

            <wrapper>

            <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div class="col-md-6">
                    <label for="inputFirstName">First Name</label>
                    <input type="text" class="form-control" id="fn-input" placeholder="First Name"/>
                </div>
                <br></br>
                <div class="col-md-6">
                    <label for="inputLastName">Last Name</label>
                    <input type="text" class="form-control" id="ln-input" placeholder="Last Name"/>
                </div>
                <br></br>
                <div class="col-md-6">
                    <label for="inputSUEmail">Email address</label>
                    <input type="email" class="form-control" id="email-su-input" placeholder="Email"/>
                </div>
                <br></br>
                <div class="col-md-6">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="username-input" placeholder="Username"/>
                </div>
                <br></br>
                <div class="col-md-6">
                    <label for="inputSUPassword">Password</label>
                    <input type="password" class="form-control" id="password-su-input" placeholder="Password"/>
                </div>
                <br></br>
                <button type="submit" class="btn btn-default">Sign Up</button>
            </div>
            </div>


            </wrapper>



            </div>
        )
    }
}

export default Signup;