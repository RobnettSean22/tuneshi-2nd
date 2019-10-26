import React, { Component } from 'react'




class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editPost:null,
            text:''
            
        }
    }

    render() {
        const {editPost} = this.state
        console.log(this.props)
        const mapMessage = this.props.messages ? this.props.messages.map(posts => {
            return (
                <div key = {posts.num}>
                    <div>
                        <input placeholder = {posts.newPosting} onChange = {(e) => this.setState({text:e.target.value})}/>
                        <button onClick ={(e) => this.props.deleteFunc(this.props.id, posts.num)}>delete</button>
                        <button onClick = {(e) => this.props.updateFunc(this.props.id, posts.num, editPost)}>Update</button>
                    </div>
                </div>
            )
        }) : null
        return (
            <div>
            
                {mapMessage}
                
            </div>
        )
    }
}

export default Posts
