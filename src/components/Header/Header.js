import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'
import MaterialIcon from 'material-icons-react';
import { Head, Button, Input } from '../styled-components/header'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "ascending",
      marks: "ascending",
    }
  }

 render() { 

  console.log(this.props)
  if(this.props.error == 0) {
    return (
      <div></div>
    )
  }

  if(this.props.error == 1 ) {

    return (
      <Head>
        <div onClick = { () => { 
              this.props.sortByNames(this.state.name.toUpperCase())
              this.toggle("name")
            }} className="button-container">
          <Button> 
          </Button>
          {
              this.props.nameURL == undefined ? <div>Names sorted in no order</div> :
              <div className = "order"><div>Names sorted in </div> <img className = "sort-icon" src={this.props.nameURL} alt ="imrankhan" />order</div>
          }
        </div>

        <div onClick = { () => { 
              this.props.sortByMarks(this.state.marks.toUpperCase())
              this.toggle("marks")
            }} className = "button-container">
          <Button>            
          </Button> 
          {
            this.props.markURL == undefined ? <div>Marks sorted in no order</div> :
              <div className = "order"><div>Marks sorted in </div> <img className = "sort-icon-mark" src={this.props.markURL} alt ="imrankhan" />order</div>
            }
        </div>
        <div className="search">  
          <Input onChange = {this.call.bind(this)} value={this.props.searchText}></Input>
          <div><MaterialIcon icon="search" /></div>
        </div>
        <NavLink
            onClick={this.signout.bind(this)}
            className = "signout"
            to={`/`}
        > Signout
        </NavLink>
      </Head>
    )
  }

  else if(this.props.error == 2) {
      return (
        <div className = "page-not-found">
          <div><strong>Data failed to load</strong></div>
          <div>Try :</div>
          <ul>
            <li>Checking the network cables, modem and router</li>
            <li>Checking the API url</li>
          </ul>
        </div>          
    );
  }

  } 

  call(e) {
    this.props.search(e.target.value)
  }

  toggle(value) {
    let name = this.state.name;
    let marks = this.state.marks;

    if(value == "name")
      name = name == "ascending" ? "descending" : "ascending"
    else
      marks = marks == "ascending" ? "descending" : "ascending"

    this.setState( {
      name: name,
      marks: marks
    })
  }

  signout() {
    let cookies = new Cookies();
    cookies.set('username', '', { path: '/' });  
  }

}

function stateToProps(state) {


  return ({ 
      student: state.studentDetails,
      nameURL: state.nameURL,
      markURL: state.markURL,
      searchText: state.searchText,
      error: state.error,
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators,dispatch)
}

export default connect(stateToProps, mapDispatchToProps)(Header);
