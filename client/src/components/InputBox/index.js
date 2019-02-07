import React from "react";
import "./style.css";

class InputBox extends React.Component {

    state = {
        submitions: [],
        submition: ""
    }

    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.submition) {
            API.saveSubmitions({
                submition: this.state.submition
            })
            .then(
                console.log(this.state.submition)
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

    render() {

        return (
            <div>

                <div className="container">

                <header>Create Comment/Post</header>

                <textarea rows='5' cols='40' id='post-textBody' value={this.state.submition} onChange={this.handleInputChange} name="submition"></textarea>

                <br></br>

                <button type="submit" className="btn btn-default" disabled={!(this.state.submition)} onClick={this.handleSubmitForm}>Post</button>

                </div>

            </div>
        )
    }
}
// use props to pass through title and submit button functionality
export default InputBox;