import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'

export default class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: [],
            

            
        }
    }
    

    componentDidMount(){
        this.readAllUsers()
    }

    readAllUsers(){
        axios.get(`/api/users`).then(response => {
            this.setState({
                allUsers: response.data
            })
        })
    }


    render() {
        const {allUsers} = this.state
        
        console.log(this.props.match.params)
         const mapUsers = allUsers.map(user => {
            return (

                <div key= {user.user_id}>
                    
                    <div>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <Link to = {`/profile/${user.user_id}`}><button className = 'to_profile'>{user.first_name} 's SHI</button></Link>
                    </div>
                </div>
                
            )
        })     
       
        
        return (
            <div>
                {mapUsers}
            </div>
        )
    }
}

