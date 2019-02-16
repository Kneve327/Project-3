import React from "react";
import API from "../../utils/API"
import "./style.css";

class PostContainer extends React.Component {

    state = {
        submitions: [],
        submition: ""
    };

    componentDidMount() {
        this.loadSubmition();
    };

    loadSubmition = event => {
        API.getSubmitions()
          .then(res => {
            // console.log(res) 
            this.setState({ post: res.data})
          })
        //   .catch(err => console.log(err));
    };

    handleInputChange = event => {
        
        this.setState({
          submition: event.target.value
        });
    };

    componentDidUpdate() {
        this.loadSubmition();
    }

    render() {

        if (this.state.post !== undefined) {
            // console.log(this.state.post);
            // console.log(this.state.submitions)
        const post = this.state.post.map((item, key) => <li key={item.id}  className="listContainer">{item.submition}<br></br><br></br><hr></hr><p className="commentStyling">COMMENT</p><hr></hr></li>).reverse();
        // console.log(this.state.post)

        // <p name="submition">{this.state.post.submition}</p>
        
        // console.log(post);
        return (

            
            <div className="postContainer">
                
                <p
                onChange={this.handleInputChange}
                value={this.state.post.submition}
                 />
                <div >
                <ul className="individualPost">
                    {post} 

                </ul>
                
                </div>
            </div>
        )
    } else {
        return(
            <div>

            </div>
        )
    }
}}

export default PostContainer;