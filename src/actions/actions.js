// import axios from "axios";
import data from "./student_data.json"

export default function fetchData() {
  return function (dispatch) {
    // return 
    // axios
    // .get("https://api.myjson.com/bins/1dlper")
    // .then(json => {
    dispatch({
      type: "DATA_LOADED",
      payload: data
    });
    // })
    // .catch(err => {
    //   dispatch({
    //     type: "FETCH_FAILED"
    //   });
    // });
  };
}

export function sortByNames(order) {
  return {
    type: order + "_NAMES"
  };
}

export function sortByMarks(order) {
  return {
    type: order + "_MARKS"
  };
}

export function search(value) {
  return {
    type: "SEARCH",
    value: value.charAt(0).toUpperCase() + value.slice(1)
  };
}
