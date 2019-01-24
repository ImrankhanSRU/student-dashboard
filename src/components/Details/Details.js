import React, { Component } from "react";
import { connect } from 'react-redux';
import fetchData from '../../actions/actions'
import { Grid, Student, Label, Loader } from '../styled-components/studentsGrid' 
import { NavLink } from 'react-router-dom'
import Highcharts from 'highcharts/highstock'
import StudentGrid from '../../components/studentsGrid/studentsGrid'

class Details extends Component {
    count = 0;
    student;

  constructor(props) {
      super(props)
      this.state = {
        call: 0
      }
  }

  marks;
  subjects;
  data;
  async componentDidMount() {
    await this.props.fetchData()
    this.chart()
    }

  render() {
    const studentId = this.props.match.params.Id
    if(studentId < 110 || studentId > 134 || isNaN(studentId)) {
        return (
            <div className = "page-not-found">
                <div><strong>404.</strong> That’s an error.</div>
                <div>The requested URL was not found on this server. </div>
                <div>That’s all we know.</div>
            </div>
        )
    }

    if( this.props.students.length == 0 ) {
      return (
        <Loader />
      )
    }   

    if(this.props.students.length){
        for(let i of this.props.students) {
            if(i != undefined) {
                if(i.rollNo == studentId) {
                    this.student = i;
                }
            }
        }
    }

    else
        this.student = this.props.students[studentId]
    return (
            <div className = "chart-container">
            <Student>
                <p>
                  <Label >Roll.No :</Label> 
                  {this.student.rollNo}
                </p>

                <p>
                  <Label >Name :</Label> 
                  {this.student.name}
                </p>

                <p>
                  <Label>Total Marks : </Label>
                  {this.sum(Object.values(this.student.marks))}
                </p>
                
           </Student>
           <div id ="chart"></div>

            </div>

     )

    
  }

  sum = (arr) => {
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }
  chart() {
        Highcharts.chart('chart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Marks in individual subjects scored by '
            },
             xAxis: {
                text : "Subject",
                categories: Object.keys(this.student.marks)
            }, 
            yAxis: {
                text : "Marks"
            },
            credits: {
                enabled: false
            },
            series : [{
                name : "Marks",
                data : Object.values(this.student.marks)
            }] 
        });
    }
    
}


function mapStateToProps(state) {
  // console.log("sa,mmlk")
  return {
    students: state.studentDetails
  };
}

export default connect(mapStateToProps, { fetchData })(Details);