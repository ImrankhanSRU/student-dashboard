import React, { Component } from "react";
import { connect } from 'react-redux';
import fetchData from '../../actions/actions'
import { Grid, Loader } from '../styled-components/studentsGrid' 
import Card from '../Card/Card'


class StudentsGrid extends Component {
  data;
  searchResultLength = 0;

  async componentDidMount() {
    if(this.props.students.length === 0)
      await this.props.fetchData();
  }

  render() {

    let keys = Object.keys(this.props.students)
    let students = this.props.students
    this.data = this.props.students

    if( this.props.students.length === 0 && !this.props.searchText.length && !this.props.error) {
      return (
        <Loader />
      )
    }

    return ( 
      <div className = "student-grid">  
        {
          this.props.searchText.length === 0  ? null :
        <strong className = "search-length" >Search results : {this.props.searchLength}</strong>
        }
        <Grid> 
        { 
          keys.map(key =>{
            return (
              <Card key ={key} student={students[key]}/>
            );
          })
        }
        </Grid>
      </div>
    )
  }
}


function mapStateToProps(state) {
  let studentsLength = 0;
  // if(state) {
    if(state.studentDetails.length){
      for(let i of state.studentDetails) {
        if(i !== undefined)
          studentsLength++;
      }
    } 
    return {
      students: state.studentDetails,
      searchLength: studentsLength,
      searchText: state.searchText,
      error:state.error
    };

  
}

export default connect(mapStateToProps, { fetchData })(StudentsGrid);