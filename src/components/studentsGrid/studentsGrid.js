import React, { Component } from "react";
import { connect } from 'react-redux';
import fetchData from '../../actions/actions'
import { Grid, Student, Label, Loader } from '../styled-components/studentsGrid' 
import { NavLink } from 'react-router-dom'

class StudentsGrid extends Component {
  data;
  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let keys = Object.keys(this.props.student)
    let students = this.props.student
    this.data = this.props.student
    if( this.props.student.length == 0 ) {
      return (
        <Loader />
      )
    }

   
    return (   
     <Grid> 
       {
        keys.map(key =>{
          return (
            <Student key = {key}>
              <NavLink
                className = "student"
                to={`/${students[key].rollNo}`}
              >
                <p>
                  <Label >Roll.No :</Label> 
                  {students[key].rollNo}
                </p>

                <p>
                  <Label >Name :</Label> 
                  {students[key].name}
                </p>

                <p>
                  <Label>Total Marks : </Label>
                  {this.sum(Object.values(students[key].marks))}
                </p>
            </NavLink>
           </Student>
          );
        })
      }
     </Grid>
     )

  
  }

  sum = (arr) => {
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }

 
}


function mapStateToProps(state) {
  // console.log("sa,mmlk")
  return {
    student: state.studentDetails
  };
}

export default connect(mapStateToProps, { fetchData })(StudentsGrid);