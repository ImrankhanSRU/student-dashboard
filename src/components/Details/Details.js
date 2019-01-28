import React, { Component } from "react";
import { connect } from 'react-redux';
import fetchData from '../../actions/actions'
import { Loader } from '../styled-components/studentsGrid' 
import Highcharts from 'highcharts/highstock'
import Card from '../Card/Card'

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
    if(this.props.students[110] == undefined && !this.props.students.length)
        await this.props.fetchData()
    if(this.count)
        this.chart()
    }

  render() {
    const studentId = this.props.match.params.Id
    if(studentId < 110 || studentId > 134 || isNaN(studentId)) {
        return (
            <div className = "page-not-found">
                <div><strong>404. Page not found</strong></div>
                <div>That’s an error.</div>
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

    this.count = 1;
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
                <Card student={this.student}/>
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
                text: 'Marks in individual subjects scored by ' + this.student.name
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
    students: state.studentDetails,
  };
}

export default connect(mapStateToProps, { fetchData })(Details);