import React, { Component } from "react";
import { connect } from 'react-redux';
import fetchData from '../../actions/actions'
import { Grid, Loader } from '../styled-components/studentsGrid' 
import Card from '../Card/Card'
import hideSignout from '../Header/Header'

class StudentsGrid extends Component {
  data;
  searchResultLength = 0;

  componentDidMount() {
    if(this.props.students.length === 0)
      this.props.fetchData();
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


const mapStateToProps = (state) => {
  let studentsLength = 0;

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
      error:state.error,
      hide: hideSignout
    };

  
}

export default connect(mapStateToProps, { fetchData })(StudentsGrid);