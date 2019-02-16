import React from "react";
import API from "../../utils/API"
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import "./style.css";


class InputBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitions: [],
            submition: "",
            isOpen: false
        }
    }
    // state = {
    //     submitions: [],
    //     submition: ""
    // }
    

    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.submition) {
            API.saveSubmitions({
                submition: this.state.submition
            })
            .then(
                // console.log(this.state.submition)
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
        const { submition, isOpen } = this.state;
        return (

           
            <div>

                <button type="button" onClick={() => this.setState({ isOpen: true })}>
                    Open Lightbox
                </button>

                {isOpen && (
                    <Lightbox
                    mainSrc={
                        
                        <div>
                        <header>Create Comment/Post</header>

                        <textarea rows='2' cols='50' id='post-textBody' value={this.state.submition} onChange={this.handleInputChange} name="submition"></textarea>
        
                        <br></br>
        
                        <button type="submit" className="btn btn-default" disabled={!(this.state.submition)} onClick={this.handleSubmitForm}>Post</button>
                        </div>
                        }
                    onCloseRequest={() => this.setState({ isOpen: false })} 
                    />
                )}

                <div className="container">

                {/* <header>Create Comment/Post</header>

                <textarea rows='5' cols='40' id='post-textBody' value={this.state.submition} onChange={this.handleInputChange} name="submition"></textarea>

                <br></br>

                <button type="submit" className="btn btn-default" disabled={!(this.state.submition)} onClick={this.handleSubmitForm}>Post</button>
                 */}
                </div>

            </div>
        )
    }
    }
// use props to pass through title and submit button functionality
export default InputBox;