import React, { Component } from "react";
import { Label, Grid } from '../styled-components/studentDetails'
import { Button, Input } from '../styled-components/header'
import Cookies from 'universal-cookie';


export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
          userName: "",
          password: ""
        }
      }

    render() {
        console.log("signIn")
        return (
            <form className = "signin-form">
                <div className = "row">
                <Input onChange = {this.handleInput.bind(this)} name = "userName" placeholder = "User name" primary/>
                <div className = "required" hidden={this.state.userName}>userName required</div>
                </div>

                <div className = "row">

                <Input type = "password" onChange = {this.handleInput.bind(this)} name = "password" placeholder = "Password" primary/>
                <div className = "required" hidden={this.state.password}>password required</div>
                </div>
                <Button onClick = {this.submit.bind(this)} disabled={!this.state.userName.length || !this.state.password.length} primary>SignIn</Button>
            </form>
        );
    }

    handleInput(e) {
        console.log("handle")
        this.setState( {
            [e.target.name]: e.target.value
        })
    }

    submit() {
        let cookies = new Cookies();
        cookies.set('username', this.state.userName, { path: '/' });

    }
}