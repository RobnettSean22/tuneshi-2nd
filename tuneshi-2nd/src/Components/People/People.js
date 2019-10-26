import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'

export default class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allPeople: []
          

            
        }
    }
    

    componentDidMount(){
        this.readAllUsers()
    }

    readAllUsers(){
        axios.get(`/api/users`).then(response => {
            this.setState({
                allPeople: response.data
            })
        })
    }


    
    render() {
        const {allPeople} = this.state
        
        console.log(this.props.match.params)
         const mapPeople = allPeople.map(people => {
            return (

                <div key= {people.user_id}>
                    
                    <div>
                        <h1>{people.first_name} {people.last_name}</h1>
                        <Link to = {`/profile/${people.user_id}`}><button className = 'to_profile'>{people.firstName} 's SHI</button></Link>
                    </div>
                </div>
                
            )
        })     
       
        
        return (
            <div>
                {mapPeople}
            </div>
        )
    }
}

