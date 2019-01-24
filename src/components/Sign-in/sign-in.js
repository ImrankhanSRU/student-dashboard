import React, { Component } from "react";
import { Input } from '../styled-components/header'
import Cookies from 'universal-cookie';
import StudentGrid from '../../components/studentsGrid/studentsGrid'
import { NavLink } from 'react-router-dom'


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
        // console.log("signIn")
        return (
            <div className = "signin-form">
                <div className = "row">
                <Input onChange = {this.handleInput.bind(this)} name = "userName" placeholder = "User name" primary/>
                <div className = "required" hidden={this.state.userName}>userName required</div>
                </div>

                <div className = "row">

                <Input type = "password" onChange = {this.handleInput.bind(this)} name = "password" placeholder = "Password" primary/>
                <div className = "required" hidden={this.state.password}>password required</div>
                </div>
        
                <NavLink
                    style = {{pointerEvents: this.state.userName.length && this.state.password.length ? "auto":"none"}}
                    onClick={this.submit.bind(this)}
                    className = "signin"
                    to={`/`}
                > Signin</NavLink>
                
            </div>
        );
    }

    handleInput(e) {
        this.setState( {
            [e.target.name]: e.target.value
        })

    }

    submit() {
        console.log(this.state.userName.length)
        console.log("aksnkd")
        let cookies = new Cookies();
        cookies.set('username', this.state.userName, { path: '/' });
    }   
}