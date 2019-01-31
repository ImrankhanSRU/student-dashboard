import React, { Component } from "react";
import { Input } from '../styled-components/header'
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom'
import { Form } from '../styled-components/studentDetails'

export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
          userName: "",
          password: "",
          event: "none"
        }
      }

    render() {
        return (
            <Form>
                <div className = "row">
                <Input onChange = {this.handleInput.bind(this)} 
                    name = "userName" placeholder = "User name" primary/>
                </div> 

                <div className = "row">

                <Input username type = "password" 
                    onChange = {this.handleInput.bind(this)} 
                    name = "password" placeholder = "Password" primary/>
                </div> 
        
                <NavLink
                    style = {{
                        pointerEvents: this.state.userName.length 
                        && this.state.password.length ? "auto":"none"}}
                    onClick={this.submit.bind(this)}
                    className = "signin"
                    to={`/`}
                > Signin</NavLink>
                
            </Form>
        );
    }

    handleInput(e) {
        this.setState( {
            [e.target.name]: e.target.value
        })

    }

    submit() {
        let cookies = new Cookies();
        cookies.set('username', this.state.userName, { path: '/' });
    }   
}