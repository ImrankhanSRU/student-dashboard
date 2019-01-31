import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'
import MaterialIcon from 'material-icons-react';
import { Head, Button, Input, Search, SearchInput } from '../styled-components/header'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { ButtonContainer } from '../styled-components/buttons'
import { PageNotFound } from '../styled-components/studentDetails'

class  Header extends Component {

render() { 


  if(this.props.error === 0) {
    return (
      <div></div>
    )
  }

  if(this.props.error === 1 ) {

    return (
      <div>
        <div onClick = { () => { 
                this.display()
              }} className = "blur" ref = "blur"></div>
        <Head>
          <ButtonContainer onClick = { () => { 
                this.props.sortByNames(this.props.name.toUpperCase())
              }}>
            <Button> 
            </Button>
            {
                this.props.nameURL === undefined ? <div>Names in no order</div> :
                <div className = "order">
                  <div>Names in </div> 
                  <img className = "sort-icon" src={this.props.nameURL} alt ="imrankhan" />order
                </div>
            }
          </ButtonContainer>

          <ButtonContainer onClick = { () => { 
                this.props.sortByMarks(this.props.marks.toUpperCase())
              }}>
            <Button>            
            </Button> 
            {
              this.props.markURL === undefined ? <div>Marks in no order</div> :
                <div className = "order">
                  <div>Marks in </div> 
                  <img className = "sort-icon-mark" src={this.props.markURL} alt ="imrankhan" />order
                  </div>
              }
          </ButtonContainer>
          <Search>  
            <Input placeholder = "Search..." 
              onChange = {this.call.bind(this)} 
              value={this.props.searchText}>
            </Input>
            <MaterialIcon icon="search" />
          </Search>
          <NavLink
              onClick={this.signout.bind(this)}
              className = "signout"
              to={`/`}
          > Signout
          </NavLink>
        </Head>
        <div className="navbar">
          <div className = "menu-icon" onClick = {this.display.bind(this)}>
            <img src = "https://i.ibb.co/PNQ0qVD/Data-Information-24.png" alt = "menu"/>
          </div>

          {/* <Search>   */}
            <SearchInput  
              search ref = "search" 
              onClick = {this.expandSearch.bind(this)} 
              onChange = {this.call.bind(this)} 
              value={this.props.searchText}>
            
            </SearchInput>
          {/* </Search> */}

        </div>

        

        <div id = "reponsive-header" className = "topNav" ref = "header">
        <Head responsive>
          <div className = "close-icon" onClick = {this.display.bind(this)}>
            <img src = "https://i.ibb.co/XbVMm14/Close-24.png" alt = "close"/>
          </div>
          <ButtonContainer onClick = { () => { 
                this.props.sortByNames(this.props.name.toUpperCase())
                this.display()
              }}>
            <Button> 
            </Button>
            {
                this.props.nameURL === undefined ? <div>Names in no order</div> :
                <div className = "order">
                  <div>Names in </div> 
                  <img className = "sort-icon" src={this.props.nameURL} alt ="imrankhan" />order
                </div>
            }
          </ButtonContainer>

          <ButtonContainer onClick = { () => { 
                this.props.sortByMarks(this.props.marks.toUpperCase())
                this.display()

              }}>
            <Button>            
            </Button> 
            {
              this.props.markURL === undefined ? <div>Marks in no order</div> :
                <div className = "order">
                  <div>Marks in </div> 
                  <img className = "sort-icon-mark" src={this.props.markURL} alt ="imrankhan" />order
                </div>
            }
          </ButtonContainer>
          
          <div>
            <NavLink
                onClick={this.signout.bind(this)}
                className = "signout signout-res"
                to={`/`}
            > Signout
            </NavLink>
          </div>
          
        </Head>
        </div>
      </div>
    )
  }

  else if(this.props.error === 2) {
      return (
        <PageNotFound className = "page-not-found">
          <div><strong style = {{marginLeft: "-30px"}}>Failed to fetch data from API</strong></div>
          <div>Try :</div>
          <ul>
            <li>Checking the network cables, modem and router</li>
            <li>Checking the API url</li>
          </ul>
        </PageNotFound>          
    );
  }

  } 

  call(e) {
    this.props.search(e.target.value)
  }

  expandSearch() {
    // let search = this.refs.search;
    // search.style= "width: 180px; padding-left: 30px;"
  }

  display(){
    let resHeader = this.refs.header;
    let blur = this.refs.blur;
    // let search = this.refs.search;

    if( resHeader.className === "topNav") {
      resHeader.className += " responsive"
      blur.className += " make-blur"
    }
    else {
      resHeader.className = "topNav"
      blur.className = "blur"
    }
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
