import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'
import MaterialIcon from 'material-icons-react';
import { Head, Button, Input } from '../styled-components/header'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "ascending",
      marks: "ascending"
    }
  }

  render() {
    // this.props.fetchData()
    // console.log(this.props.student)
    return (
      <Head>
        <Button onClick = { () => { 
            this.props.sortByNames(this.state.name.toUpperCase())
            this.toggle("name")
          }}> 
          Sort by names in {this.state.name}
        </Button>
        <Button onClick = { () => { 
            this.props.sortByMarks(this.state.marks.toUpperCase())
            this.toggle("marks")
          }}> 
          Sort by markss in {this.state.marks}
        </Button>        
        <Input onChange = {this.call.bind(this)}/>
        <Button style = {{borderRadius: 0}}>
          <MaterialIcon icon="search" />
        </Button>
      </Head>
    )

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

}

function stateToProps(state) {
  // console.log(state)
  return ({ 
      student: state.studentDetails,
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators,dispatch)
}

export default connect(stateToProps,  mapDispatchToProps)(Header);
