
const initialState = {
  studentDetails: [],
  searchText: "",
  error:0,
  marks: "ascending",
  name:"ascending"
};

let students;
const rootReducer = (state = initialState , action) => {

  let nameURLForAscend = require("../assets/alpha-asc.png")
  let nameURLForDescend = require("../assets/alpha-desc.png")
  
  let marksURLForAscend = require("../assets/number-asc.png")
  let marksURLForDescend = require("../assets/number-desc.png")


  let dataObj = {}
  let studentData = []  

  if(state.studentDetails.length) {
    for(let student of state.studentDetails) {
      if(student)
        dataObj[student.rollNo] = student
    }
    state.studentDetails = dataObj
    for (let key in state.studentDetails) {
      if (state.studentDetails.hasOwnProperty(key))         
          studentData[key] = state.studentDetails[key]
    }
  }

  switch (action.type) {
    case "DATA_LOADED":
    // if(action.payload[110]) {
    //   state.error = 1;
    // }

    // else{
    //   state.error = 2;
    // } 

    students = action.payload

    // console.log(students)
    return (Object.assign({}, state, {
        studentDetails: action.payload,
        nameURL:undefined,
        markURL:undefined,
      }));

      // return action.payload

    case "ASCENDING_NAMES":


      for (let key in state.studentDetails) {
        if (state.studentDetails.hasOwnProperty(key))         
            studentData[key] = state.studentDetails[key]
      }


      return Object.assign({}, state, {
        studentDetails: studentData.sort(ascendingByNames),
        nameURL: nameURLForAscend,
        markURL:undefined,
        name:"descending",
        marks: "ascending"
      });

    case "DESCENDING_NAMES":
      return Object.assign({}, state, {
        studentDetails: studentData.sort(descendingByNames),
        nameURL: nameURLForDescend,
        markURL:undefined,
        name:"ascending",
        marks:"ascending"
      });

    case "ASCENDING_MARKS":
      for (let key in state.studentDetails) {
        if (state.studentDetails.hasOwnProperty(key))   {
            studentData[key] = state.studentDetails[key]
        }
      }

      return Object.assign({}, state, {
        studentDetails: studentData.sort(ascendingByMarks),
        markURL: marksURLForAscend,
        nameURL:undefined,
        marks: "descending",
        name: "ascending"
      }); 

    case "DESCENDING_MARKS":
      return Object.assign({}, state, {
        studentDetails: studentData.sort(descendingByMarks),
        markURL: marksURLForDescend,
        nameURL:undefined,
        marks: "ascending",
        name: "ascending"
    }); 

    case "FETCH_FAILED":
      return Object.assign({}, state, {
        error:2,
      });


    case "SEARCH":
      for (let key in students) {
        if (students.hasOwnProperty(key))         
            studentData[key] = students[key]
      }

      if(state.nameURL === nameURLForAscend) {
        studentData = studentData.sort(ascendingByNames)
      }

      else if(state.nameURL === nameURLForDescend) {
        studentData = studentData.sort(descendingByNames)
      }

      else if(state.markURL === marksURLForAscend ) {
        studentData = studentData.sort(ascendingByMarks)
      }

      else if(state.markURL === marksURLForDescend) {
        studentData = studentData.sort(descendingByMarks)
      }

      return Object.assign({}, state, {
        studentDetails: studentData.filter(
            student => student.name.slice(0, action.value.length) === action.value),
        searchText: action.value
      }); 

    default:
      return state;
  }
}


 const ascendingByNames = (a, b) =>{
  // console.log(a.name, b.name)
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

const descendingByNames = (a, b) => {
  if (a.name < b.name)
      return 1;
  if (a.name > b.name)
      return -1;
  return 0;
}

const ascendingByMarks = (a, b) => {
  // console.log(a.marks)
  if (sum(a.marks) < sum(b.marks))
      return -1;
  if (sum(a.marks) > sum(b.marks))
      return 1;
  return 0;
}

const descendingByMarks = (a, b) => {
  if (sum(a.marks) < sum(b.marks))
      return 1;
  if (sum(a.marks) > sum(b.marks))
      return -1;
  return 0;
}


const sum = (arr) =>{
  let marks;
  marks = Object.values(arr)
  // console.log(marks) 
  return marks.reduce(function(a,b){
    return a + b
  }, 0);
}
export default rootReducer;
