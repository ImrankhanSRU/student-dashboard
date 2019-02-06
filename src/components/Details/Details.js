import React, { Component } from "react";
import { connect } from "react-redux";
import fetchData from "../../actions/actions";
import { Loader } from "../styled-components/studentsGrid";
import Highcharts from "highcharts/highstock";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import { PageNotFound } from "../styled-components/studentDetails";
import { ChartContainer } from "../styled-components/studentsGrid";
import { Theme } from "../../index";

class Details extends Component {
  count = 0;
  student;
  constructor(props) {
    super(props);
    this.state = {
      call: 0
    };
  }

  marks;
  subjects;
  data;

  async componentDidMount() {
    if (this.props.students[110] === undefined && !this.props.students.length)
      await this.props.fetchData();
    if (this.count) 
        this.chart();
  }

  render() {
    const studentId = this.props.match.params.Id;

    if (this.props.error === 2) {
      return (
        <PageNotFound className="page-not-found">
          <div>
            <strong>Failed to fetch data from API</strong>
          </div>
          <div>Try :</div>
          <ul>
            <li>Checking the network cables, modem and router</li>
            <li>Checking the API url</li>
          </ul>
        </PageNotFound>
      );
    } else if (
      ((studentId < 110 || studentId > 134 || isNaN(studentId)) &&
        this.props.error === 1) ||
      studentId.includes(".")
    ) {
      return (
        <PageNotFound className="page-not-found">
          <div>
            <strong>404. Page not found</strong>
          </div>
          <div>That’s an error.</div>
          <div>The requested URL was not found on this server. </div>
          <div>That’s all we know.</div>

          <NavLink className="go-back link" to={"/"}>
            Go Back
          </NavLink>
        </PageNotFound>
      );
    }

    if (this.props.students.length === 0) {
      return <Loader />;
    }

    this.count = 1;
    if (this.props.students.length) {
      for (let i of this.props.students) {
        if (i !== undefined) {
          if (i.rollNo.toString() === studentId) {
            this.student = i;
          }
        }
      }
    } else this.student = this.props.students[studentId];
    return (
      <div>
        <NavLink to={"/"}>
          <img
            className="back-icon"
            src="https://i.ibb.co/RyWpnwG/Left-Arrow-128.png"
            alt="Go-Back"
          />
        </NavLink>

        <ChartContainer>
          <Card student={this.student} />
          <div id="chart" />
        </ChartContainer>
      </div>
    );
  }

  chart = () => {
    Highcharts.chart("chart", {
      chart: {
        type: "column"
      },
      title: {
        text: "Marks in each subject scored by " + this.student.name
      },
      xAxis: {
        text: "Subject",
        categories: Object.keys(this.student.marks)
      },
      yAxis: {
        text: "Marks"
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Marks",
          color: Theme.background,
          data: Object.values(this.student.marks)
        }
      ]
    });
  };
}

const mapStateToProps = state => {
  return {
    students: state.studentDetails,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(Details);
