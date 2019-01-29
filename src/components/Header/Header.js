import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'
import MaterialIcon from 'material-icons-react';
import { Head, Button, Input } from '../styled-components/header'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie';

class Header extends Component {


 render() { 


  if(this.props.error === 0) {
    return (
      <div></div>
    )
  }

  if(this.props.error === 1 ) {

    return (
      <Head>
        <div onClick = { () => { 
              this.props.sortByNames(this.props.name.toUpperCase())
            }} className="button-container">
          <Button> 
          </Button>
          {
              this.props.nameURL === undefined ? <div>Names sorted in no order</div> :
              <div className = "order"><div>Names sorted in </div> <img className = "sort-icon" src={this.props.nameURL} alt ="imrankhan" />order</div>
          }
        </div>

        <div onClick = { () => { 
              this.props.sortByMarks(this.props.marks.toUpperCase())
            }} className = "button-container">
          <Button>            
          </Button> 
          {
            this.props.markURL === undefined ? <div>Marks sorted in no order</div> :
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

  else if(this.props.error === 2) {
      return (
        <div className = "page-not-found">
          <div><strong>Failed to fetch data from API</strong></div>
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

  signout() {
    let cookies = new Cookies();
    cookies.set('username', '', { path: '/' });  
  }

}

function stateToProps(state) {


  return ({ 
      nameURL: state.nameURL,
      markURL: state.markURL,
      searchText: state.searchText,
      error: state.error,
      name: state.name,
      marks: state.marks
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators,dispatch)
}

export default connect(stateToProps, mapDispatchToProps)(Header);
