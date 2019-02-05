import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";
import MaterialIcon from "material-icons-react";
import {
  Head,
  MobileHeader,
  Button,
  Input,
  Search,
  SearchInput,
  NavBar
} from "../styled-components/header";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { ButtonContainer, Signout } from "../styled-components/buttons";
import { PageNotFound } from "../styled-components/studentDetails";

class Header extends Component {
  render() {
    if (this.props.error === 0) {
      return <div />;
    }

    if (this.props.error === 1) {
      return (
        <div>
          <div
            onClick={() => {
              this.display();
            }}
            className="blur"
            ref="blur"
          />
          <Head className="header">
            <ButtonContainer
              onClick={() => {
                this.props.sortByNames(this.props.name.toUpperCase());
              }}
            >
              {/* <Button /> */}
              {this.props.nameURL === undefined ? (
                <div>Names in no order</div>
              ) : (
                <div className="order">
                  <div>Names in </div>
                  <img
                    className="sort-icon"
                    src={this.props.nameURL}
                    alt="imrankhan"
                  />
                  order
                </div>
              )}
            </ButtonContainer>

            <ButtonContainer
              onClick={() => {
                this.props.sortByMarks(this.props.marks.toUpperCase());
              }}
            >
              {/* <Button /> */}
              {this.props.markURL === undefined ? (
                <div>Marks in no order</div>
              ) : (
                <div className="order">
                  <div>Marks in </div>
                  <img
                    className="sort-icon-mark"
                    src={this.props.markURL}
                    alt="imrankhan"
                  />
                  order
                </div>
              )}
            </ButtonContainer>
            <Search>
              <Input
                placeholder="Search..."
                onChange={this.call.bind(this)}
                value={this.props.searchText}
              />
              <MaterialIcon icon="search" />
            </Search>
            <NavLink
              onClick={this.signout.bind(this)}
              className="link"
              to={'/'}
            >
              {" "}
              <Signout>Signout</Signout>
            </NavLink>
          </Head>
          <NavBar>
            <div className="menu-icon" onClick={this.display.bind(this)}>
              <img
                src="https://i.ibb.co/PNQ0qVD/Data-Information-24.png"
                alt="menu"
              />
            </div>

            {/* <Search>   */}
            <SearchInput
              search
              ref="search"
              onChange={this.call.bind(this)}
              value={this.props.searchText}
            />
            {/* </Search> */}
          </NavBar>

          {/* <div id="reponsive-header" className="topNav" ref="header"> */}
            <MobileHeader style = {{width: "0"}} responsive ref = "mobileHeader">
              <div className="close-icon" onClick={this.display.bind(this)}>
                <img src="https://i.ibb.co/XbVMm14/Close-24.png" alt="close" />
              </div>
              <ButtonContainer
                onClick={() => {
                  this.props.sortByNames(this.props.name.toUpperCase());
                  this.display();
                }}
              >
                <Button />
                {this.props.nameURL === undefined ? (
                  <div>Names in no order</div>
                ) : (
                  <div className="order">
                    <div>Names in </div>
                    <img
                      className="sort-icon"
                      src={this.props.nameURL}
                      alt="imrankhan"
                    />
                    order
                  </div>
                )}
              </ButtonContainer>

              <ButtonContainer
                onClick={() => {
                  this.props.sortByMarks(this.props.marks.toUpperCase());
                  this.display();
                }}
              >
                <Button />
                {this.props.markURL === undefined ? (
                  <div>Marks in no order</div>
                ) : (
                  <div className="order">
                    <div>Marks in </div>
                    <img
                      className="sort-icon-mark"
                      src={this.props.markURL}
                      alt="imrankhan"
                    />
                    order
                  </div>
                )}
              </ButtonContainer>

              <div>
                <NavLink
                  onClick={this.signout.bind(this)}
                  className="signout signout-res link"
                  to={''}
                >
                  {" "}
                  <Signout>Signout</Signout>
                </NavLink>
              </div>
            </MobileHeader>
          {/* </div> */}
        </div>
      );
    } else if (this.props.error === 2) {
      return (
        <PageNotFound className="page-not-found">
          <div>
            <strong style={{ marginLeft: "-30px" }}>
              Failed to fetch data from API
            </strong>
          </div>
          <div>Try :</div>
          <ul>
            <li>Checking the network cables, modem and router</li>
            <li>Checking the API url</li>
          </ul>
        </PageNotFound>
      );
    }
  }

  call = e => this.props.search(e.target.value);

  display = () => {
    // let resHeader = this.refs.header;
    let blur = this.refs.blur;
    if(this.refs.mobileHeader.style.width === "0px") {
      this.refs.mobileHeader.style = 'width: 300px';
      blur.className += ' make-blur'
    }

    else{
      this.refs.mobileHeader.style = 'width: 0px';
      blur.className = 'blur'
    }
  };

  signout = () => {
    let cookies = new Cookies();
    cookies.set("username", "", { path: "/" });
  };
}

const stateToProps = state => {
  return {
    nameURL: state.nameURL,
    markURL: state.markURL,
    searchText: state.searchText,
    error: state.error,
    name: state.name,
    marks: state.marks
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);


export default connect(
  stateToProps,
  mapDispatchToProps
)(Header);
