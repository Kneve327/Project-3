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
        const { isOpen } = this.state;
        return (

           
            <div>

                <a href="/myprofile/1"><i id="profilePictureInput" className="faButton fas fa-user icon-cog"></i></a>

                <p id="titleInput" className="navbar-brand">STATEMENT</p>

                {/* <div className="d-flex justify-content-end"> */}
                <a href="/Home"><i id="homeInput" className="faButtonInput fas fa-home icon-cog"></i></a>
                <a href="/"><i id="searchInput" className="faButtonInput fas fa-search icon-cog"></i></a>
                {/* <a href="/"><i id="notifications" className="faButton fas fa-bolt icon-cog"></i></a> */}

                <button id="fa-plusInput" type="button" onClick={() => this.setState({ isOpen: true })}><i className="faButton fas fa-plus icon-cog"></i></button>


                {/* </div> */}






                {/* <button id="plus-signButton" type="button" onClick={() => this.setState({ isOpen: true })}>
                    Open Lightbox
                </button> */}

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