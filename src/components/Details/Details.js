import React, { Component } from "react";
import { Student, Label, Grid} from '../styled-components/studentDetails' 
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock'

class Details extends Component {
    studentId = this.props.match.params.Id
    student = {};

    componentDidMount() {

        // console.log(this.student)

        const subjects = Object.keys(this.student.marks)
        const marks = Object.values(this.student.marks)
        Highcharts.chart('chart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Marks in individual subjects scored by ' + this.student.name
            },
             xAxis: {
                text : "Year",
                categories: subjects
            }, 
            yAxis: {
                text : "matches"
            },
            credits: {
                enabled: false
            },
            series : [{
                name : "Matches",
                data : marks
            }] 
        });
      }


    render() {

        if(this.props.students.length > 0) {
            for(let i of this.props.students) {
                if(i.rollNo == this.studentId) {
                    this.student = i;
                    break;
                }
            }
        }

        else {
            this.student = this.props.students[this.studentId]
        }
        // console.log(this.props)
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
                        {this.sum( Object.values(this.student.marks))}
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
}

function mapStateToProps(state) {
    // console.log(state.studentDetails)
    return {
      students: state.studentDetails
    };
  }
  
  export default connect(
  mapStateToProps,
  )(Details);